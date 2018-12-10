# geoblaze-cli
Command Line Interface (CLI) for GeoBlaze

# Identify
You can write the command `identify` or `id` for short, to get the pixel value at a certain location.
```
geoblaze id imagery.tiff "-70,40"
```

# Sum
Get the sum of the pixels in an area for each band
```
geoblaze sum imagery.tiff borders.geojson
```

# Histogram
`geoblaze histogram imagery.tiff borders.geojson`

# bandArithmetic
`geoblaze bandArithmetic imagery.tiff '(c - b)/(c + b)'`

# rasterCalculator
`geoblaze rasterCalculator imagery.tiff 'return A > 100 ? 1 : 0'`

# Contact
 - Daniel J. Dufour (daniel.j.dufour@gmail.com)
