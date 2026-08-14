#!/bin/bash
git pull && docker build -t manual-peptideos:latest . && docker stack deploy -c docker-compose.yml manual-peptideos && docker service update --force --image manual-peptideos:latest manual-peptideos_manual-peptideos
