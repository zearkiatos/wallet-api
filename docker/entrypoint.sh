if [ $(echo "$NODE_ENV")=="development" ]
then
    npm run dev
else
    npm run start
fi

echo "`date`: 🤖 All ready boss!"