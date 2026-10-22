<#
.GERAÇÃO DOS ÍCONES DA APLICAÇÃO (favicon / icon / apple-icon)

Origem: public\images\logo_arc.png
Destinos:
  - src\app\favicon.ico    (multi-resolução 16/32/48, servido em /favicon.ico)
  - src\app\icon.png       (512x512, link rel="icon" para navegadores modernos)
  - src\app\apple-icon.png (180x180, ícone da tela inicial do iOS)

Uso (a partir da raiz do projeto):
  powershell -ExecutionPolicy Bypass -File scripts\generate-favicon.ps1
#>

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root     = Split-Path -Parent $PSScriptRoot
$logoPath = Join-Path $root 'public\images\logo_arc.png'
$appDir   = Join-Path $root 'src\app'

if (-not (Test-Path -LiteralPath $appDir)) { throw "Diretorio nao encontrado: $appDir" }

# ===========================================================================
# 1. Localiza o emblema (o "A" grafico da marca) dentro da logo.
#    O emblema e o maior componente conexo de pixels azuis da faixa superior.
# ===========================================================================
$logo = [System.Drawing.Bitmap]::FromFile($logoPath)

$rx0 = 20; $ry0 = 60; $rx1 = 210; $ry1 = 190
$rw = $rx1 - $rx0; $rh = $ry1 - $ry0
$blueMap = New-Object 'bool[,]' $rw, $rh
for ($y = 0; $y -lt $rh; $y++) {
  for ($x = 0; $x -lt $rw; $x++) {
    $px = $logo.GetPixel($rx0 + $x, $ry0 + $y)
    if ($px.A -gt 40 -and $px.B -gt ($px.R + 20)) { $blueMap[$x, $y] = $true }
  }
}

$stack = New-Object System.Collections.Stack
$best = $null
for ($y = 0; $y -lt $rh; $y++) {
  for ($x = 0; $x -lt $rw; $x++) {
    if (-not $blueMap[$x, $y]) { continue }
    $blueMap[$x, $y] = $false
    $stack.Push(@($x, $y))
    $area = 0; $cminx = $x; $cmaxx = $x; $cminy = $y; $cmaxy = $y
    while ($stack.Count -gt 0) {
      $cell = $stack.Pop(); $cx = $cell[0]; $cy = $cell[1]; $area++
      if ($cx -lt $cminx) { $cminx = $cx }; if ($cx -gt $cmaxx) { $cmaxx = $cx }
      if ($cy -lt $cminy) { $cminy = $cy }; if ($cy -gt $cmaxy) { $cmaxy = $cy }
      for ($dy = -1; $dy -le 1; $dy++) {
        for ($dx = -1; $dx -le 1; $dx++) {
          $nx = $cx + $dx; $ny = $cy + $dy
          if ($nx -ge 0 -and $nx -lt $rw -and $ny -ge 0 -and $ny -lt $rh -and $blueMap[$nx, $ny]) {
            $blueMap[$nx, $ny] = $false; $stack.Push(@($nx, $ny))
          }
        }
      }
    }
    if ($null -eq $best -or $area -gt $best.Area) {
      $best = [pscustomobject]@{
        Area = $area
        X0 = $cminx + $rx0; X1 = $cmaxx + $rx0
        Y0 = $cminy + $ry0; Y1 = $cmaxy + $ry0
      }
    }
  }
}
$logo.Dispose()

if ($null -eq $best -or $best.Area -lt 1000) { throw "Emblema nao localizado em $logoPath" }

$pad = 2
$minx = $best.X0 - $pad; $maxx = $best.X1 + $pad
$miny = $best.Y0 - $pad; $maxy = $best.Y1 + $pad
$cw = $maxx - $minx + 1
$ch = $maxy - $miny + 1
Write-Host "Emblema: x=$minx..$maxx y=$miny..$maxy ($cw x $ch px, $($best.Area) px de tinta)"

# ===========================================================================
# 2. Extrai o recorte (alpha e cor premultiplicada, para evitar franjas)
# ===========================================================================
$logo = [System.Drawing.Bitmap]::FromFile($logoPath)
$srcA = New-Object 'double[]' ($cw * $ch)
$srcR = New-Object 'double[]' ($cw * $ch)
$srcG = New-Object 'double[]' ($cw * $ch)
$srcB = New-Object 'double[]' ($cw * $ch)
for ($y = 0; $y -lt $ch; $y++) {
  for ($x = 0; $x -lt $cw; $x++) {
    $px = $logo.GetPixel($minx + $x, $miny + $y)
    $alpha = $px.A / 255.0
    $idx = $y * $cw + $x
    $srcA[$idx] = $alpha
    $srcR[$idx] = $px.R * $alpha
    $srcG[$idx] = $px.G * $alpha
    $srcB[$idx] = $px.B * $alpha
  }
}
$logo.Dispose()

# ===========================================================================
# 3. Arte-mestra 512x512 (fundo transparente), com reamostragem bilinear
# ===========================================================================
$masterSize = 512
$masA = New-Object 'double[]' ($masterSize * $masterSize)
$masR = New-Object 'double[]' ($masterSize * $masterSize)
$masG = New-Object 'double[]' ($masterSize * $masterSize)
$masB = New-Object 'double[]' ($masterSize * $masterSize)

$fit = $masterSize * 0.90
$ratio = [Math]::Min($fit / $cw, $fit / $ch)
$drawW = $cw * $ratio
$drawH = $ch * $ratio
$offX = ($masterSize - $drawW) / 2.0
$offY = ($masterSize - $drawH) / 2.0

for ($oy = 0; $oy -lt $masterSize; $oy++) {
  $fy = ($oy - $offY) / $ratio
  if ($fy -lt 0) { $fy = 0 }
  if ($fy -gt ($ch - 1)) { $fy = $ch - 1 }
  $y0 = [int][Math]::Floor($fy)
  $y1 = $y0 + 1
  if ($y1 -gt ($ch - 1)) { $y1 = $ch - 1 }
  $ty = $fy - $y0
  for ($ox = 0; $ox -lt $masterSize; $ox++) {
    $fx = ($ox - $offX) / $ratio
    if ($fx -lt 0) { $fx = 0 }
    if ($fx -gt ($cw - 1)) { $fx = $cw - 1 }
    $x0 = [int][Math]::Floor($fx)
    $x1 = $x0 + 1
    if ($x1 -gt ($cw - 1)) { $x1 = $cw - 1 }
    $tx = $fx - $x0

    $i00 = $y0 * $cw + $x0; $i10 = $y0 * $cw + $x1
    $i01 = $y1 * $cw + $x0; $i11 = $y1 * $cw + $x1

    $w00 = (1 - $tx) * (1 - $ty); $w10 = $tx * (1 - $ty)
    $w01 = (1 - $tx) * $ty;       $w11 = $tx * $ty

    $alpha = $srcA[$i00] * $w00 + $srcA[$i10] * $w10 + $srcA[$i01] * $w01 + $srcA[$i11] * $w11
    $pos = $oy * $masterSize + $ox
    $masA[$pos] = $alpha
    if ($alpha -gt 0.0001) {
      $masR[$pos] = ($srcR[$i00] * $w00 + $srcR[$i10] * $w10 + $srcR[$i01] * $w01 + $srcR[$i11] * $w11) / $alpha
      $masG[$pos] = ($srcG[$i00] * $w00 + $srcG[$i10] * $w10 + $srcG[$i01] * $w01 + $srcG[$i11] * $w11) / $alpha
      $masB[$pos] = ($srcB[$i00] * $w00 + $srcB[$i10] * $w10 + $srcB[$i01] * $w01 + $srcB[$i11] * $w11) / $alpha
    }
  }
}

# ===========================================================================
# 4. Downsampling por area (qualidade) para cada tamanho final
# ===========================================================================
function Get-ScaledPixels {
  param(
    [int]$Size,
    [double[]]$InA, [double[]]$InR, [double[]]$InG, [double[]]$InB,
    [int]$SrcSize
  )
  $outA = New-Object 'double[]' ($Size * $Size)
  $outR = New-Object 'double[]' ($Size * $Size)
  $outG = New-Object 'double[]' ($Size * $Size)
  $outB = New-Object 'double[]' ($Size * $Size)
  $step = $SrcSize / [double]$Size
  for ($ty = 0; $ty -lt $Size; $ty++) {
    $sy0 = [int][Math]::Floor($ty * $step)
    $sy1 = [int][Math]::Ceiling(($ty + 1) * $step)
    if ($sy1 -le $sy0) { $sy1 = $sy0 + 1 }
    if ($sy1 -gt $SrcSize) { $sy1 = $SrcSize }
    for ($tx = 0; $tx -lt $Size; $tx++) {
      $sx0 = [int][Math]::Floor($tx * $step)
      $sx1 = [int][Math]::Ceiling(($tx + 1) * $step)
      if ($sx1 -le $sx0) { $sx1 = $sx0 + 1 }
      if ($sx1 -gt $SrcSize) { $sx1 = $SrcSize }
      $sumA = 0.0; $sumR = 0.0; $sumG = 0.0; $sumB = 0.0; $cnt = 0
      for ($sy = $sy0; $sy -lt $sy1; $sy++) {
        for ($sx = $sx0; $sx -lt $sx1; $sx++) {
          $idx = $sy * $SrcSize + $sx
          $aVal = $InA[$idx]
          $sumA += $aVal
          $sumR += $InR[$idx] * $aVal
          $sumG += $InG[$idx] * $aVal
          $sumB += $InB[$idx] * $aVal
          $cnt++
        }
      }
      $alpha = $sumA / $cnt
      $pos = $ty * $Size + $tx
      $outA[$pos] = $alpha
      if ($alpha -gt 0.0001) {
        $outR[$pos] = $sumR / $cnt / $alpha
        $outG[$pos] = $sumG / $cnt / $alpha
        $outB[$pos] = $sumB / $cnt / $alpha
      }
    }
  }
  return , @($outA, $outR, $outG, $outB)
}

function ConvertTo-PngBytes {
  param(
    [double[]]$InA, [double[]]$InR, [double[]]$InG, [double[]]$InB,
    [int]$Size,
    [bool]$WhiteBackground
  )
  $bmp = New-Object System.Drawing.Bitmap($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $rect = New-Object System.Drawing.Rectangle(0, 0, $Size, $Size)
  $lock = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  try {
    $bytes = New-Object byte[] ($Size * $Size * 4)
    for ($ty = 0; $ty -lt $Size; $ty++) {
      for ($tx = 0; $tx -lt $Size; $tx++) {
        $idx = $ty * $Size + $tx
        $alpha = $InA[$idx]
        $cr = $InR[$idx]; $cg = $InG[$idx]; $cb = $InB[$idx]
        if ($WhiteBackground) {
          $cr = $cr * $alpha + 255 * (1 - $alpha)
          $cg = $cg * $alpha + 255 * (1 - $alpha)
          $cb = $cb * $alpha + 255 * (1 - $alpha)
          $alpha = 1.0
        }
        $off = ($ty * $Size + $tx) * 4
        $bytes[$off + 0] = [byte][Math]::Round([Math]::Max(0, [Math]::Min(255, $cb)))
        $bytes[$off + 1] = [byte][Math]::Round([Math]::Max(0, [Math]::Min(255, $cg)))
        $bytes[$off + 2] = [byte][Math]::Round([Math]::Max(0, [Math]::Min(255, $cr)))
        $bytes[$off + 3] = [byte][Math]::Round([Math]::Max(0, [Math]::Min(255, $alpha * 255)))
      }
    }
    [System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $lock.Scan0, $bytes.Length)
  } finally {
    $bmp.UnlockBits($lock)
  }
  $stream = New-Object System.IO.MemoryStream
  $bmp.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  return , $stream.ToArray()
}

# ===========================================================================
# 5. Gera os arquivos
# ===========================================================================
$iconPx = Get-ScaledPixels -Size 512 -InA $masA -InR $masR -InG $masG -InB $masB -SrcSize $masterSize
$iconPng = ConvertTo-PngBytes -InA $iconPx[0] -InR $iconPx[1] -InG $iconPx[2] -InB $iconPx[3] -Size 512 -WhiteBackground $false
[System.IO.File]::WriteAllBytes((Join-Path $appDir 'icon.png'), $iconPng)

$applePx = Get-ScaledPixels -Size 180 -InA $masA -InR $masR -InG $masG -InB $masB -SrcSize $masterSize
$applePng = ConvertTo-PngBytes -InA $applePx[0] -InR $applePx[1] -InG $applePx[2] -InB $applePx[3] -Size 180 -WhiteBackground $true
[System.IO.File]::WriteAllBytes((Join-Path $appDir 'apple-icon.png'), $applePng)

# favicon.ico com PNGs embutidos (16 / 32 / 48)
$frames = @()
foreach ($sz in @(16, 32, 48)) {
  $scaled = Get-ScaledPixels -Size $sz -InA $masA -InR $masR -InG $masG -InB $masB -SrcSize $masterSize
  $png = ConvertTo-PngBytes -InA $scaled[0] -InR $scaled[1] -InG $scaled[2] -InB $scaled[3] -Size $sz -WhiteBackground $false
  $frames += , @($sz, [byte[]]$png)
}

$stream = New-Object System.IO.MemoryStream
$writer = New-Object System.IO.BinaryWriter($stream)
$writer.Write([UInt16]0)          # reservado
$writer.Write([UInt16]1)          # tipo: icone
$writer.Write([UInt16]$frames.Count)
$offset = 6 + 16 * $frames.Count
foreach ($frame in $frames) {
  $sz = $frame[0]; $data = $frame[1]
  $dim = if ($sz -ge 256) { 0 } else { $sz }
  $writer.Write([Byte]$dim)
  $writer.Write([Byte]$dim)
  $writer.Write([Byte]0)          # cores na paleta
  $writer.Write([Byte]0)          # reservado
  $writer.Write([UInt16]1)        # planos
  $writer.Write([UInt16]32)       # bits por pixel
  $writer.Write([UInt32]$data.Length)
  $writer.Write([UInt32]$offset)
  $offset += $data.Length
}
foreach ($frame in $frames) { $writer.Write([byte[]]$frame[1]) }
$writer.Flush()
[System.IO.File]::WriteAllBytes((Join-Path $appDir 'favicon.ico'), $stream.ToArray())
$writer.Dispose(); $stream.Dispose()

Write-Host "Gerados:"
Write-Host "  src\app\icon.png        ($($iconPng.Length) bytes)"
Write-Host "  src\app\apple-icon.png  ($($applePng.Length) bytes)"
Write-Host "  src\app\favicon.ico     ($((Get-Item (Join-Path $appDir 'favicon.ico')).Length) bytes)"
