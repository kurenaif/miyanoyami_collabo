rerun:
	make rm && make build && make run

build:
	docker build . -t kurenaif/pprce-1

run:
	docker run -p 49160:8080 -p 9229:9229 --name pprce-1 -d kurenaif/pprce-1 

shell:
	docker exec -it pprce-1 /bin/bash

rm:
	docker rm -f pprce-1
