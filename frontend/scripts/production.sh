export APP=playitright.tv
export SSH=playitright.tv
export SRC=$HOME/Desktop/BCXStudio/playitright-tv
export DIST=$SRC/out
export TAR=$DIST/$APP.tar.gz

# prepare directories
mkdir -p $DIST

# build 
cd $SRC && npm run build

# compress build
cd $DIST && tar -zcvf $TAR ./

# sftp to server
scp -i ~/.ssh/digitalocean $TAR root@$SSH:/tmp

# run deploy script in server
ssh -i ~/.ssh/digitalocean root@$SSH 'bash -s' < $SRC/scripts/deploy.sh
