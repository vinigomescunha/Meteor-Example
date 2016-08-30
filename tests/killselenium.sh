#/bin/sh
#if selenium crash
#selenium port
PORT_NUMBER=4444
#case selenium case has bug
#beware! in last case kill service in background
lsof -i tcp:${PORT_NUMBER} | awk 'NR!=1 {print $2}' | xargs kill 
