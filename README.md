# geoblaze-cli
Command Line Interface (CLI) for [GeoBlaze](geoblaze.io)

# Usage
```
geoblaze identify <georaster> <point>
geoblaze id <georaster> <point>
geoblaze bandArithmetic <georaster> [geovector] <expression>
geoblaze histogram <georaster> [geovector] [--scaleType={nominal|ratio}] [--numClasses=<numClasses>] [--classType={equal-interal|quantile}]
geoblaze max <georaster> [geovector]
geoblaze min <georaster> [geovector]
geoblaze mean <georaster> [geovector]
geoblaze median <georaster> [geovector]
geoblaze mode <georaster> [geovector]
geoblaze rasterCalculator <georaster> [geovector] <functionBody>
geoblaze calc <georaster> [geovector] <functionBody>
geoblaze sum <georaster> [geovector]
```

You can write the command `identify` or `id` for short, to get the pixel value at a certain location.
### Usage
```
geoblaze id GEORASTER GEOVECTOR
```

### Example
```
geoblaze id image.tiff "-70,40"
```



The **NAME_OF_CALCULATION** can be one of the following:
 - bandArithmetic (or math)
 - identify (or id)
 - histogram (or hist)
 - max
 - min
 - mean
 - median
 - mode
 - rasterCalculator or (calc)
 - sum

The **GEORASTER** can be the name of a file found in your current directory, a url to the file, or a relative or absolute path to the file in your computer.  If you specify a relative path, start it with `./`.

The **GEOVECTOR** is optional.  You can provide it as a path to a geojson file, path to a zipped shapefile, or a url to a GeoJSON or Zipped Shapefile.

The **COMMAND_SPECIFIC_ARGUMENTS** may or may not exist depending on the command.

Here's instructions for each command

## Sum
Get the sum of the pixels in an area for each band
```
geoblaze sum image.tiff borders.geojson
```

### Averages (Mean, Median, and Mode)
You can calculate the average pixel value for each band in a raster.  You can also specify the location within the raster to use for the calculation.  The command takes the format of `geoblaze CALCULATION GEORASTER GEOVECTOR`.    Here's some examples,

### Median of all Pixel Values in a GeoTIFF
```
geoblaze median image.tiff
```
### Median within a Specified Area
```
geoblaze median image.tiff area.shp
```

## Min
Get the lowest value of all pixels by band.  You can also specify an area within the raster.
### Min of all Pixels
```
geoblaze min image.tiff
```
### Min within a Specified Area
```
geoblaze min image.tiff area.shp
```

## Max
Get the highest value of all pixels by band.  You can also specify an area within the raster.
### Max of all Pixels
```
geoblaze max image.tiff
```
### Max within a Specified Area
```
geoblaze max image.tiff area.shp
```

## Histogram
`geoblaze histogram image.tiff borders.geojson`

## bandArithmetic
`geoblaze bandArithmetic image.tiff '(c - b)/(c + b)'`

## rasterCalculator
`geoblaze rasterCalculator image.tiff 'return A > 100 ? 1 : 0'`

# Contact
 - Daniel J. Dufour (daniel.j.dufour@gmail.com)
