#!/bin/bash

medusa migrations run
medusa user -e test@test.com -p test
medusa seed --seed-file=data/seed.json

medusa $1