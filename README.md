# HaProxy - Reverse Proxy

### Step 1: Configure HaProxy, File haproxy/haproxy.cfg
- Frontend Section: path_beg urls
- Backend Section: Server IP Network Addresses and Server Ports

### Step 2: Build my-haproxy Docker Image
- Path: reverse-proxy/haproxy/run.sh
```bash
./build.sh
```


### Step 3: Run my-haproxy Docker Container
- Path: reverse-proxy/haproxy/run.sh
```bash
./run.sh
```

### Step 4: Install Servers Dependencies
- Path: reverse-proxy/demo
```bash
npm install
```

### Step 5: Run Server 1
- Open a terminal and go to reverse-proxy
- Path: reverse-proxy/demo
```bash
npm run server1
```

### Step 6: Run Server 2
- Open a new terminal and go to reverse-proxy
- Path: reverse-proxy/demo
```bash
npm run server2
```

### Step 7: Try cURL
- Open a new terminal

```bash
cURL http://localhost:8086/api/s1 
```
```bash
cURL http://localhost:8086/api/s2
```

## Stop HaProxy Container and Daemon
- Path: reverse-proxy/haproxy/stop.sh
```bash
./stop.sh
```