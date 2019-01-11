# geoblaze -- a command line interface for blazing fast raster analysis

## SYNOPSIS
- `geoblaze help`
- `geoblaze identify <georaster> <point>`
- `geoblaze id <georaster> <point>`
- `geoblaze bandArithmetic <georaster> <expression>`
- `geoblaze histogram <georaster> [geovector] [--scaleType={nominal|ratio}] [--numClasses=<numClasses>] [--classType={equal-interal|quantile}]`
- `geoblaze max <georaster> [geovector]`
- `geoblaze min <georaster> [geovector]`
- `geoblaze mean <georaster> [geovector]`
- `geoblaze median <georaster> [geovector]`
- `geoblaze mode <georaster> [geovector]`
- `geoblaze rasterCalculator <georaster> <functionBody>`
- `geoblaze calc <georaster> [geovector] <functionBody>`
- `geoblaze sum <georaster> [geovector]`
- `geoblaze version`


## DESCRIPTION
GeoBlaze CLI is an open-source command line interface to the GeoBlaze JavaScript Raster Processing Engine (geoblaze.io).  It allows you to do simple basic aggregate statistics like, mean, median and mode while only typing one line.  You can also use it to simply run band arithmetic like NDVI and save the result to a file.

## OPTIONS
* `help`: Display this helpful information
* `identify`, `id`: Get the value of the pixel at the specified point.  The Point should be specified as a longitude and latitude pair "-40,20"
* `bandArithmetic`: Run band arithmetic, like NDVI, on a raster and save the result to a file.
* `histogram`: Calculate the histogram of a raster.
* `max`:  Get the highest value in the raster, ignoring no data values.
* `min`:  Get the lowest value in the raster, ignoring no data values.
* `mean`: Get the mean average of pixel values in a raster.  You can optionally specify a geovector file, like a geojson or a shapefile, so the calculation is only run on the pixels of the raster inside of the vectors.
* `median`: Get the median average of pixel values in a raster.  You can optionally specify a geovector file, like a geojson or a shapefile, so the calculation is only run on the pixels of the raster inside of the vectors.
* `mode`: Get the most common pixel value in a raster.  You can optionally specify a geovector file, like a geojson or a shapefile, so the calculation is only run on the pixels of the raster inside of the vectors.
* `rasterCalculator`, `calc`: Run a function on the specified raster file and save the new raster to a file.
* `sum`:  Get the sum of pixel values in a raster file. You can optionally specify a geovector file, like a geojson or a shapefile, so the calculation is only run on the pixels of the raster inside of the vectors.
* `version`:  Show version, which is found in the package.json

## Examples
### Get the Pixel Value at Paris, France
`geoblaze id image.tiff "48.8567,2.3508"`
### Get Acreage of Wheat in Ukraine
`geoblaze sum wheat.tiff ukraine.geojson`
### Calculate NDVI
`geoblaze bandArithmetic image.tiff '(c - b)/(c + b)'`
### Binarize a Raster
`geoblaze rasterCalculator image.tiff 'return A > 100 ? 1 : 0'`
### More Examples
  https://github.com/GeoTIFF/geoblaze-cli/blob/master/EXAMPLES.md

## AUTHOR
  Daniel J. Dufour: https://danieljdufour.com

## BUGS
- https://github.com/GeoTIFF/geoblaze-cli/issues/

## INTERNET RESOURCES
- Source Code Repository: https://github.com/GeoTIFF/geoblaze-cli
- Package Manager Entry: https://www.npmjs.com/package/geoblaze-cli
- Slack Channel: https://geotiff.slack.com
- Issue Tracker: https://github.com/GeoTIFF/geoblaze-cli/issues
- GeoBlaze Information: https://geoblaze.io
- Intersection Algorithm: https://medium.com/@DanielJDufour/calculating-intersection-of-polygon-with-a-raster-89c2624d78a2

## LICENSING
  The GeoBlaze CLI is distributed under the MIT License.  See the file ["LICENSE"](LICENSE) in the GeoBlaze CLI source-distribution for information on terms & conditions for accessing and otherwise using the GeoBlaze CLI and for a DISCLAIMER OF ALL WARRANTIES.
