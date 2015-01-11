server:
	@node index.js

production:
	@DEBUG=ifttt node index.js

build:
	@echo "nothing to do..."

.PHONY: production server build
