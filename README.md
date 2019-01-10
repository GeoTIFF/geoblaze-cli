# geoblaze-cli
Command Line Interface (CLI) for [GeoBlaze](geoblaze.io)

# Basic Documentation
```
NAME
  geoblaze - a command line interface to blazing fast raster analysis

Usage:
  geoblaze identify <georaster> <point>
  geoblaze id <georaster> <point>
  geoblaze bandArithmetic <georaster> <expression>
  geoblaze histogram <georaster> [geovector] [--scaleType={nominal|ratio}] [--numClasses=<numClasses>] [--classType={equal-interal|quantile}]
  geoblaze max <georaster> [geovector]
  geoblaze min <georaster> [geovector]
  geoblaze mean <georaster> [geovector]
  geoblaze median <georaster> [geovector]
  geoblaze mode <georaster> [geovector]
  geoblaze rasterCalculator <georaster> <functionBody>
  geoblaze calc <georaster> [geovector] <functionBody>
  geoblaze sum <georaster> [geovector]
  geoblaze version

CALCULATIONS:
  identify or id           Get the value of the pixel at the specified point.  The Point should be specified as a longitude and latitude pair "-40,20"
  bandArithmetic            Run band arithmetic, like NDVI, on a raster and save the result to a file.
  histogram Calculate the histogram of a raster.
  max                      Get the highest value in the raster, ignoring no data values.
  min                      Get the lowest value in the raster, ignoring no data values.
  mean                     Get the mean average of pixel values in a raster.  You can optionally specify a geovector file, like a geojson or a shapefile, so the calculation is only run on the pixels of the raster inside of the vectors.
  median                   Get the median average of pixel values in a raster.  You can optionally specify a geovector file, like a geojson or a shapefile, so the calculation is only run on the pixels of the raster inside of the vectors.
  mode                     Get the most common pixel value in a raster.  You can optionally specify a geovector file, like a geojson or a shapefile, so the calculation is only run on the pixels of the raster inside of the vectors.
  rasterCalculator or calc Run a function on the specified raster file and save the new raster to a file.
  sum                      Get the sum of pixel values in a raster file. You can optionally specify a geovector file, like a geojson or a shapefile, so the calculation is only run on the pixels of the raster inside of the vectors.
  version                   Show version, which is found in the package.json

Author:
  Daniel J. Dufour: https://danieljdufour.com

Internet Resources:
  Source Code Repository: https://github.com/GeoTIFF/geoblaze-cli
  Package Manager Entry: https://www.npmjs.com/package/geoblaze-cli
  Slack Channel: https://geotiff.slack.com
  Issue Tracker: https://github.com/GeoTIFF/geoblaze-cli/issues

LICENSING:
  The GeoBlaze CLI is distributed under the MIT License.  See the file "LICENSE" in the GeoBlaze CLI source-distribution for information on terms & conditions for accessing and otherwise using the GeoBlaze CLI and for a DISCLAIMER OF ALL WARRANTIES.

SUPPORT:
  Email the maintainer Daniel J. Dufour at daniel.j.dufour@gmail.com
```
