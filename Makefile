build:
	node index.js

watch:
	while inotifywait -e close_write,moved_to,create -r .; do make build; done

.PHONY: build watch
