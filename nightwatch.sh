#/bin/sh
#nightwatch configuration folder
NIGHTWATCH_CONF=tests/nightwatch/nightwatch.json
#localhost server
SERVER=localhost
#selenium port
PORT=4444
#folder where is script files
CODECEPT_FOLDER=tests/codecept.io
#folder where is ja standalones
SELENIUM_FOLDER=tests/selenium-server-standalone-2.53.0.jar
#get status of selenium in local server
</dev/tcp/$SERVER/$PORT
#is status = zero then execute selenium
if [ "$?" -ne 0 ]; then
  #display status to user
  echo "Selenium Server is not Running : $SERVER on port $PORT,\n Initiate..."
  #execute selenium server
  eval "java -jar $SELENIUM_FOLDER &"
  #execute nightwatch
  eval "nightwatch --c=$NIGHTWATCH_CONF"

else
  #if selenium is running then display to user
  echo "Selenium server running on 'http://$SERVER:$PORT'"
  #display status which codecept will run
  echo "Execute tests nightwatch run"
  #execute nightwatch
  eval "nightwatch --c=$NIGHTWATCH_CONF"

fi
