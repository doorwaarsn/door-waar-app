#!/bin/bash
docker build -t bo . --no-cache
docker run -p 8086:80 bo