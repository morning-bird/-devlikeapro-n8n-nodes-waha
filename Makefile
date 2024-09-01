.PHONY: clean build link start dev

build:
	npm run lint && npm run build

link:
	npm link

start:
	cd ~/.n8n/custom && npm link n8n-nodes-waha && n8n start

dev:
	make clean
	make build
	make link
	make start

clean:
	rm -rf ./dist
