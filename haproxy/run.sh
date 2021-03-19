# Remove old my-running-haproxy Container
./stop.sh
# Start my-running-haproxy
docker run -d --name my-running-haproxy -p 8086:8086 my-haproxy
echo "HaProxy running on Port 8086"