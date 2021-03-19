# Build my-haproxy Docker Container
docker build -t my-haproxy .
# Verify haproxy configuration inside the Docker Container
docker run -it --rm --name haproxy-syntax-check my-haproxy haproxy -c -f /usr/local/etc/haproxy/haproxy.cfg