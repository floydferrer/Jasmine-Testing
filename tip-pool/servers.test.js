describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table with server name and earnings', function () {
    submitServerInfo();
    updateServerTable();
    let server = document.querySelectorAll('#serverTable tbody tr td');

    expect(server.length).toEqual(2);
    expect(server[0].innerText).toEqual('Alice');
    expect(server[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = ''
    allServers = {};
  });
});
