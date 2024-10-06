# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.8] - Added resetElementHeights Method
### Fixed
- Resolved an issue where DOM elements retained their expanded height after resizing the page. The `resetElementHeights` method has been added to reset the height of elements each time the `controlElementGroupStructure` method is invoked.