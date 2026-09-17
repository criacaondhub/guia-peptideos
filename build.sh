#!/bin/bash
git pull && docker build -t guia-peptideos:latest . && docker stack deploy -c docker-compose.yml guia-peptideos && docker service update --force --image guia-peptideos:latest guia-peptideos_guia-peptideos
