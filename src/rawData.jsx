//edits in this will will screw some stuff up, restart the page to get
//markup like **text** and text\ntext working again 
export const rawData = [
    {
        title: "basic configuration",//labels
        color: "flag",
        description: ""
    },
    {
        title:"erase startup config",
        color:"red",
        commands:"#erase startup\n#reload"
    },
    {
        title: "configure hostname",
        color: "red",
        description: "sets hostname of the device",
        commands: "(config)# hostname <hostname>"
    }, {
        title: 'set banner',
        color: 'red',
        description: 'the banner is displayed on connecting to the device',
        commands: '(config)# banner motd <delimiter><message><delimiter>'
    }, {
        title: 'password 1',
        color: 'red',
        description: 'configure root enable password',
        commands: '(config)# enable secret <password>'
    }, {
        title: 'password 2',
        color: 'red',
        description: 'configure login passwords on lines',
        commands: '(config)# line vty 0 4\n(config-line)# password <password>\n(config-line)# login\n(config-line)# transport input {ssh | telnet}'
    }, {
        title: 'encrypt passwords',
        color: 'red',
        description: 'encrypts all passwords used on the device',
        commands: '(config)# service password-encryption'
    },
    {
        title: 'save config',
        color: 'red',
        description: 'save the configuration to startup-config',
        commands: '# copy running-config startup-config'
    },
    {
        title: 'disable DNS lookup',
        color: 'red',
        description: 'stops a router or switch from running domain name lookup for unrecognized commands',
        commands: '(config)# no ip domain-lookup'
    },
    {
        title: 'reload',
        color: 'red',
        description: 'reloads the device from startup-config',
        commands: '# reload'
    },
    {
        title: "interfaces",//labels
        color: "flag",
        description: ""
    },
    {
        title: 'configure an interface',
        color: 'orange',
        description: 'you can choose to have only one of ipv4 or ipv6 in use',
        commands: '(config)# interface <type><number>\n(config-if)# description <description>\n(config-if)# ip address <ipv4 address> <subnet>\n(config-if)# ipv6 address <ipv6 address>/<prefix length>\n(config-if)# no shutdown'
    },
    {
        title: 'show interfaces',
        color: 'orange',
        description: 'command 2 is used for specific interfaces',
        commands: '# show ip interface brief\n# show {ip | ipv6} interface <interface>'
    },
    {
        title: 'show routing table',
        color: 'orange',
        description: 'desc',
        commands: '# show ip route'
    },
    {
        title: 'configure loopback',
        color: 'orange',
        description: 'desc',
        commands: '(config)# interface loopback <number>\n(config-if)# ip address <ip address> <subnet mask>'
    },
    {
        title: 'set default gateway',
        color: 'orange',
        description: '**Note**: the device must be connected to the given gateway',
        commands: '(config)# ip default-gateway <ip gatway>'
    },
    {
        title: 'enable ip routing',
        color: 'orange',
        description: '**Note**: enkel voor layer 3 switches inter vlan routing',
        commands: 'ip routing'
    },
    {
        title: "select multiple interfaces",
        color: 'orange',
        description: "configure multiple interfaces at once",
        commands: '(config)# interface range <interface start>-<last number of end interface>'
    },
    {
        title: "ipv6 settings",//labels
        color: "flag",
        description: ""
    },
    {
        title: 'set ipv6 link local',
        color: 'yellow',
        description: 'fe80:..., door OS aangemaakt, enkel op zelfde vlan(/kabel)\n\n**Note**: link local van een router kan een default gateway zijn',
        commands: '(config-if)# ipv6 address <ipv6 address> link-local'
    },
    {
        title: 'enable IPv6 routing',
        color: 'yellow',
        description: '**Note**: also enables SLAAC',
        commands: '(config)# ipv6 unicast-routing'
    },
    {
        title: "security",//labels
        color: "flag",
        description: ""
    },
    {
        title: 'set minimum password length',
        color: 'green',
        description: '',
        commands: '(config)# security passwords min-length <0-16>'
    },
    {
        title: 'block failed logins',
        color: 'green',
        description: 'blocks the user from connecting if multiple failed login attempts are recorded',
        commands: '(config)# login block-for <block time> attempts <failed attempts> within <timeframe>'
    },
    {
        title: 'set root timeout',
        color: 'green',
        description: 'go back to user exec(>) mode from priviliged exec(#) after given time',
        commands: '(config-line)# exec-timeout <mins> <secs>'
    },
    {
        title: "remote access",//labels
        color: "flag",
        description: ""
    },
    {
        title: 'enable ssh',
        color: 'lime',
        description: '**Note**: gebruik **show ip ssh** om te kijken of ssh supported is, zo niet werkt dit commando niet\n\n**Note**:gebruik enkel het laatste commando als SSHv2 supported is',
        commands: '(config)# hostname <hostname>\n(config)# ip domain name <domain name>\n(config)# crypto key generate rsa general-keys modulus 1024\n(config)# username <username> secret <password>\n(config)# enable secret <password>\n(config)# line vty 0 15\n(config-line)# login local\n(config-line)# transport input ssh\n(config)# ip ssh version 2'
    },
    {
        title: 'remote switch access step 1',
        color: 'lime',
        description: 'Configure the Management Interface\n\n**Note**: The switch may need to be configured for IPv6. For example, before you can configure IPv6 addressing on a Cisco Catalyst 2960 running IOS version 15.0, you will need to enter the global configuration command **sdm prefer dual-ipv4-and-ipv6 default** and then reload the switch.',
        commands: '# configure terminal\n(config)# interface vlan <vlan number>\n(config-if)# ip address <ip address> <subnet>\n(config-if)# ipv6 address <ipv6 address>/<prefix length>\n(config-if)# no shutdown'
    },
    {
        title: "remote switch access step 2",
        color: 'lime',
        description: 'configure default gateway\n\n**Note**: Because, it will receive its default gateway information from a router advertisement (RA) message, the switch does not require an IPv6 default gateway.',
        commands: '(config)# ip default-gateway <default gateway>\n(config)# end\n(config)# copy running-config startup config'
    },
    {
        title: 'VLAN',
        color: 'flag',
        description: ""
    },
    {
        title: 'create vlan',
        color: 'blue',
        description: '**Note**: het commando **switchport access vlan** maakt automatisch een vlan aan als deze nog niet bestaat',
        commands: '(config)# vlan <vlan id>\n(config-vlan)# name <name>'
    },
    {
        title: 'delete vlan',
        color: 'blue',
        description: '',
        commands: '(config)# no vlan <vlan id>'
    },
    {
        title: 'vlan port assignment',
        color: 'blue',
        description: '**Note**: het commando **switchport mode access** is optioneel, wel is het aangeraden voor security zodat een poort zo geen trunk kan worden\n\n**Note**: **interface range** kan gebruikt worden om tegelijk meerdere interfaces te configureren\n\n**Note**: laatste commando enkel gebuiken als voice vlan nodig is(aka IP phones)\n\n**Note**: zie ip routing voor intervlan routing op L3 switch',
        commands: '(config)# interface <interface>\n(config-if)# switchport mode access\n(config-if)# switchport access vlan <access vlan id>\n(config-if)# switchport voice vlan <voice vlan id>'
    },
    {
        title: 'change vlan port membership',
        color: 'blue',
        description: '',
        commands: '(config-if)# switchport access vlan <vlan id>\n(config-if)# no switchport access vlan'
    },
    {
        title: 'trunk configuration',
        color: 'blue',
        description: '**Note**: laatste commando kan bepaalde vlans uitsluiten van trunk',
        commands: '(config)# interface <interface of vlan>\n(config-if)# switchport mode trunk\n(config-if)# switchport trunk native vlan <vlan id>\n(config-if)# switchport trunk allowed vlan <vlan,list>'
    },
    {
        title: 'disable trunk',
        color: "blue",
        description: '**Note**: dus om niet toe te staan',
        commands: '(config-if)# no switchport trunk allowed vlan\n(config-if)# no switchport trunk native vlan'
    },
    {
        title: 'autoconfigure switchport',
        color: "blue",
        description: '**Note**: gebruik **switchport nonegotiate** om dynamic mode packets te negeren, enkel op trunk of access mode ',
        commands: '(config-if)# switchport mode dynamic auto'
    },
    {
        title: 'create vlan interface',
        color: 'blue',
        description: '**Note**: management interface als gebruikt voor management',
        commands: '(config)# interface vlan <vlan id>\n(config-if)# ip add <ip address> <subnet>\n(config-if)# no shut\n(config-if)# exit\n(config)# ip default-gateway <default gateway>'
    },
    {
        title: 'create subinterfaces',
        color: 'blue',
        description: '**Note**: router-on-a-stick\n\n**Note**: description op subinterfaces en interface kunnen verschillend zijn',
        commands: '(config)# interface <interface>.<subinterface, vermoedelijk vlan id>\n(config-subif)# description <desc>\n(config-subif)# encapsulation dot1Q <vlan id>\n(config-subif)# ip add <interface ip> <subnet>'
    },
    {
        title: 'routing config on L3 switch',
        color: 'blue',
        description: '**Note**: zie documentatie op papier\n\n**Note**: gebruikt voor layer 3 switch inter vlan routing',
        commands: '(config)# int vlan <vlan id>\n(config-if)# ip address <vlan default gateway> <subnet>\n(config)# ip routing'
    },
    {
        title: "etherChannel",
        color: "flag",
        description: ""
    },
    {
        title: "basic config",
        color: "fuchsia",
        description: "basic configuration of an etherChannel\n\n**Note**: na laatste commando kan configuratie gedaan worden zoals een enkel interface",
        commands: "(config)# interface range <interface range>\n(config-if-range)# channel-group <group id> mode active\n(config)# interface port-channel <group id>"
    },
    {
		title:"etherchannel op router",
		color:"fuchsia",
		commands:`(config)# int port-channel <port channel number>
(config-if)# ip add <address> <mask>
(config-if)# int range <port range for etherchannel>
(config-if-range)# channel-group <port channel nummer>`
	},
    {
        title: "show commands",
        color: 'fuchsia',
        description: "used for troubleshooting",
        commands: "# show interfaces port-channel <id>\n# show etherchannel summary\n# show etherchannel port-channel\n# show interfaces <interface> etherchannel"
    },
    {
        title: "ip routing",
        color: "flag",//check of description werkt bij flags
        description: "**Note**: niet fully specified enkel bruikbaar bij point to point",
        commands: ""
    },
    {
        title: "ip route command",
        color: "darkCyan",
        description: "",
        commands: "ip route <destination network> <destination subnet> { <next hop ip> | <exit interface> [<next hop ip>]} [administrative distance]\nipv6 unicast-routing\nipv6 route <destination network>/<prefix> { <next hop ip> | <exit-interface> [<next hop ip>]} [administrative distance]"
    },
    {
        title: "ip route via interface",
        color: "darkCyan",
        description: "**Note**: nuttig bij directe verbinding\n\n idem voor ipv6",
        commands: "ip route <destination network> <destination subnet> <interface>"
    },
    {
        title: "fully specified ip route",
        color: "darkCyan",
        description: "bruikbaar bij ethernet connecties om specifieke netwerken aan te spreken via zelfde interface\n\nals ipv6 een link local address gebruikt als exit interface wordt deze ook gebruikt",
        commands: "ip route <destination network> <destination subnet> <exit interface> <next hop ip>"
    }, {
        title: "floating static route",
        color: "darkCyan",
        description: "is een backup route, administrative distance moet altijd hoger zijn dan de primary route (eg. 91 of hoger be EIGRP)",
        commands: "ip route <destination> <subnet> <exit interface> <administrative distance>"
    },
    {
        title: "spanning tree",
        color: "flag",
        description: ""
    },
    {
        title: "portfast",
        color: "darkRed",
        description: 'end devices only',
        commands: "(config-if)# spanning-tree portfast"
    },
    {
        title: "bpdu guard",
        color: "darkRed",
        description: "end devices only",
        commands: '(config)# spanning-tree portfast bpduguard default'
    },
    {
        title: "set primary root",
        color: "darkRed",
        description: "default priority = 32768",
        commands: "(config)# spanning-tree vlan <vlan, vlan range or specific vlans(, separated)> root primary\n(config)# spanning-tree vlan <vlan, vlan range or specific vlans(, separated)> priority <priority in 4096 increment>"
    },
    {
        title: "DHCP & SLAAC",
        color: "flag"
    }, {
        title: "exclude addresses",
        color: "orange",
        description: "als enkel low address wordt gebruikt wordt enkel dat adres uitgesloten, anders range",
        commands: "(config)# ip dhcp excluded-address <low-address> [high-address]"
    }, {
        title: "pool name",
        color: "orange",
        description: "zet router in dhcp config mode",
        commands: "(dhcp-config)# network <network address> [<mask> | /<prefix>]\n(dhcp-config)# default-router <default gateway> [...<backup routers>]\n(dhcp-config)# dns-server <dns> [...<backup dns servers>]"
    },
    {
        title: "config pool",
        color: "orange",
        description: "zet router in dhcp mode",
        commands: "(config)# ip dhcp pool pool-name"
    },
    {
        title: "toggle dhcp",
        color: "orange",
        commands: "(config)# [no] service dhcp"
    },
    {
        title: "config dhcp client",
        color: "orange",
        commands: "(config)# interface <interface>\n(config-if)# ip address dhcp\n(config-if)# no shutdown"
    },
    {
        title: "enable stateless DHCPv6",
        color: "orange",
        commands: '(config-if)# ipv6 nd other-config-flag'
    },
    {
        title: "enable stateful DHCPv6",
        color: "orange",
        commands: "(config-if)# ipv6 nd other-config-flag\n(config-if)# ipv6 nd prefix default no-autoconfig"
    }, {
        title: 'config stateless DHCPv6 server',
        color: 'orange',
        commands: '(config)# ipv6 unicast-routing\n(config)# ipv6 dhcp pool <pool name>\n(config-dhcpv6)# dns-server <ipv6 addr of dns server>\n(config-dhcpv6)# domain-name <domain>\n(config-if)# ipv6 nd other-config-flag\n(config-if)# ipv6 dhcp server <zelfde pool name\n(config-if)# no shut'
    },
    {
        title: "config stateless DHCPv6 client",
        color: "orange",
        commands: "(config)# ipv6 unicast-routing\n(config-if)# ipv6 enable\n(config-if)# ipv6 address autoconfig"
    },
    {
        title: "config statefull DHCPv6 server",
        color: "orange",
        commands: '(config)# ipv6 unicast-routing\n(config)# ipv6 dhcp pool <pool name>\n(config-dhcpv6)# address prefix <network>/<prefix>\n(config-dhcpv6)# dns-server <dns ipv6>\n(config-dhcpv6)# domain-name <domain>\n(config-if)# ipv6 address fe80::1 link-local\n(config-if)# ipv6 address <network>/<prefix>\n(config-if)# ipv6 nd managed-config-flag\n(config-if)# ipv6 nd prefix default no-autoconfig\n(config-if)# ipv6 dhcp server <pool name>\n(config-if)# no shut'
    },
    {
        title: "config statefull DHCPv6 client",
        color: "orange",
        commands: "(config)# ipv6 unicast-routing\n(config-if)# ipv6 enable\n(config-if)# ipv6 address dhcp"
    },
    {
        title: "config DHVPv6 relay agent",
        color: "orange",
        description: "**Note**: commando uitgevoerd op interface aan client side, het deel [<interface>] in commando is het interface verbonden aan de dhcp server",
        commands: 'ipv6 dhcp relay destination <ipv6-address> [<interface>]'
    },
    {
        title: "FHRP",
        color: "flag"
    },
    {
        title: "config HSRP",
        color: "yellow",
        description: "**Note**: commando aan kant client\n v1 support enkel ipv4",
        commands: "(config-if)# standby version 2"
    },
    {
        title: "create virtual router",
        color: "yellow",
        description: "**Note**: dit default gateway moet dan ook op de hosts & tussenapparatuur(eg. switches) worden gebruikt\n\n**Note** een router in meerdere virtual router groups zitten\n\n**Note**: laatste 2 commando's enkel als gebruik gemaakt wordt van die router als eerste router",
        commands: "(config-if)# standby <virtual router group> ip <virtual router default gateway>\n(config-if)# standby <group> priority <priority level>\n(config-if)# standby <group> preempt"
    },
    {
        title: "security",
        color: "flag"
    },
    {
        title: 'disable cdp',
        color: 'green',
        description: 'stops the device from using the cdp protocol\n\n**Note**: gebruik 1 vd 2 waarvan de 2e geldt voor end devices',
        commands: '(config)# no cdp run\n(config-if)# no cdp enable'
    },
    {
        title: 'disable lldp',
        color: 'green',
        description: 'stops the device from using the lldp protocol\n\n**Note**: gebruik 1 vd 2 waarvan de 2e geldt voor end devices',
        commands: '(config)# no lldp run\n(config-if)# no lldp <transmit of recieve>'
    },
    {
        title: " bpdu guard",
        color: "green",
        description: "<a href='#bpdu guard'>zie bpdu guard in STP</a>"
    },
    {
        title: "port security",
        color: "green",
        description: "show via **show port-security interface <interface>**\n\n**Note**: If an active port is configured with the **switchport port-security** command and more than one device is connected to that port, the port will transition to the error-disabled state.",
        commands: "(config-if)# switchport port-security"
    },
    {
        title: "set maximum secure addresses",
        color: "green",
        commands: "(config-if)# switchport port-security maximum <value>"
    },
    {
        title: "configure safe addresses",
        color: "green",
        description: "sticky laat geleerde mac adressen vasthangen in running config, deze worden mee opgeslaan via **copy running-config startup config**",
        commands: "(config-if)# switchport port-security mac-address <mac-address>\n(config-if)# switchport port-security mac-address sticky"
    }, {
        title: "port security aging",
        color: "green",
        description: "static => Enable aging for statically configured secure addresses on this port. time in minutes, 0 = disabled",
        commands: "(config-if)# switchport port-security aging [ static | time <time> | type [absolute | inactivity]]"
    },
    {
        title: 'violation modes',
        color: "green",
        description: "vanaf restricted: syslogs & violation counter, vanaf shutdown ook port shutdown\n\n**Note**: als aantal poorten hoger is dan aantal geleerde poorten worden ongekende mac frames gedropt tot weer mac address table plaats beschikbaar is\n\n**Note**: shutdown; no shutdown is nodig om poorten weer uit port violation te krijgen bij secure shutdown config",
        commands: "(config-if)# switchport port-security violation { protect | restrict | shutdown(default)}"
    },
    {
        title: "switchport nonegotiate",
        color: "green",
        description: "best gebruiken op trunk ports, er is al geen negotiation op expliciet access",
        commands: "(config-if)# switchport nonegotiate"
    },
    {
        title: "dhcp snooping",
        color: "green",
        description: "**Note**: als geen vlan opgegeven geldt config voor alles\n\nwaar config-if(1) op trusted interfaces; config-if(2) op untrusted ports, default interfaces = untrusted",
        commands: "(config)# ip dhcp snooping\n(config-if)# ip dhcp snooping trust\n(config-if)# ip dhcp snooping limit rate <msg per second>\n(config)# ip dhcp snooping vlan <configured vlans>"
    },
    {
        title: "dynamic arp inspection",
        color: "green",
        description: "zie dhcp snooping, vervang *dhcp snooping* met *arp inspection*"
    },
    {
        title: "extra arp validation",
        color: "green",
        description: "bij gebruik meerdere, achter elkaar invoeren, src checkt src in header tegen sender mac, dest checkt destination tegen target mac in arp body, ip checkt invalid ips (onder andere quad 0 en quad 255) ",
        commands: "ip arp inspection validate [[src-mac] [dst-mac] [ip]]"
    },
    {
        title: "undetermined",//labels
        color: "flag",
        description: ""
    },
    {
        title: 'crash recovery',
        color: 'purple',
        description: `connect console\nunplug power\nreplug power\nwithing 15 seconds press mode until leds briefly go to orange then solid green`,
        commands: 'switch: set\nswitch: flash_init\nswitch: dir flash:\nswitch: BOOT=flash:<path to new boot.bin>\nswitch: set\nswitch: boot'
    },
    {
        title: 'config duplex',
        color: 'purple',
        description: '**Note**: Mismatched settings for the duplex mode and speed of switch ports can cause connectivity issues. Autonegotiation failure creates mismatched settings.',
        commands: '# configure terminal\n(config)# interface FastEthernet 0/1\n(config-if)# duplex {full | half | auto} \n(config-if)# speed {10 | 100 | auto}'
    },
    {
        title: 'automatic mdix',
        color: 'purple',
        description: '**Note**: second command does not seem to work',
        commands: '(config-if)# mdix auto\n# show controllers ethernet-controller fa0/1 phy | include MDIX'
    },
    {
        title: 'show cisco neighbours',
        color: 'purple',
        description: 'shows all cisco devices connected to this device',
        commands: '# show cdp neighbors'
    },
    {
        title: 'network config on pc',
        color: 'purple',
        description: '**Note**: in windows niet op router',
        commands: 'NCPA.CPL'
    },
    {
        title: 'Err1',
        color: 'purple',
        description: 'does not seem to work',
        commands: '(config)# show ip ports all'
    },
    {
        title: 'Err2',
        color: 'purple',
        description: 'does not seem to work',
        commands: '(config)# show control-plane host open ports'
    },
    {
        title: 'Err3',
        color: 'purple',
        description: 'does not seem to work',
        commands: '(config)# no ip http server'
    },
    {
        title: "OSPF",
        color: "flag",
        description: ""
    },
    {
        title: 'OSPF show databases',
        color: 'maroon',
        description: 'adjacency = directly connected bidirectional\nlink state = adjacency table voor volledige netwerk\nforwarding db = routing table, zie ook #interfaces',
        commands: '(config)# show ip ospf neighbour\n(config)# show ip ospf database\n(config)# show ip route ospf\n(config)# show ip ospf\n(config)# show ip ospf interface <interface>\n(config)# show ip ospf interface brief'
    },
    {
        title: "show commands (includes id)",
        color: "maroon",
        commands: "(config)# show ip protocols\n(config)# show ip ospf interface <interface>"
    },
    {
        title: "enable OSPF",
        color: "maroon",
        description: "router ospf *process-id* (1-65535), given: example command\n**note**: process id moet niet dezelfde zijn, is enkel locaal significant(aka in area), best practice is wel zelfde id gebruiken\n**note**: gebruik ipv6 router ospf *id* voor ospfv3 commandos",
        commands: "(config)# router ospf 10"
    },
    {
        title: "configure loopback as router ID",
        color: "maroon",
        description: "\"Instead of relying on physical interface, the router ID can be assigned to a loopback interface. Typically, the IPv4 address for this type of loopback interface should be configured using a 32-bit subnet mask (255.255.255.255). This effectively creates a host route. A 32-bit host route would not get advertised as a route to other OSPF routers.\"",
        commands: "(config-if)# interface Loopback 1\n(config-if)# ip address 1.1.1.1 255.255.255.255\n(config-if)# end\n# show ip protocols | include Router ID\n   Router ID 1.1.1.1"
    },
    {
        title: "manually assign router id",
        color: "maroon",
        description: "top priority for assinging rid",
        commands: "(config)# router ospf 10\n(config-router)# router-id 1.1.1.1\n(config-router)# end\n# show ip protocols | include Router ID\n   Router ID 1.1.1.1"
    },
    {
        title: "modify router id",
        color: "maroon",
        description: "een router zal zijn id niet aanpassen zolang die aanstaat, hiervoor moet een reload of clear gebeuren omdat die moet hernegotieren met andere routers",
        commands: "(config)# router ospf 10\n(config-router)# router-id 1.1.1.1\n# clear ip ospf process\nReset ALL OSPF processes? [no]: y"
    },
    {
        title: "example network command",
        color: "maroon",
        description: "(config-router)# network *network-address* *wildcard-mask* area *area-id*\n\n**note**: in plaats van netwerken (e.g. 10.10.1.0) mogen ook adressen van interfaces mogen gebruikt zoals 10.10.1.1, zo is wildcard calculation niet nodig, dan mag ook quad zero wildcard gebruikt worden",
        commands: "(config)# router ospf 10\n(config-router)# network 10.10.1.0 0.0.0.255 area 0\n(config-router)# network 10.1.1.4 0.0.0.3 area 0\n(config-router)# network 10.1.1.12 0.0.0.3 area 0"
    },
    {
        title: "ip ospf command",
        color: "maroon",
        description: "**note**:in voorbeeld eerst \"vorige config\" weggehaald\n\n(config-if)# ip ospf *process-id* area *area-id*",
        commands: "(config)# router ospf 10\n(config-router)# no network 10.10.1.1 0.0.0.0 area 0\n(config-router)# no network 10.1.1.5 0.0.0.0 area 0\n(config-router)# no network 10.1.1.14 0.0.0.0 area 0\n(config-router)# interface GigabitEthernet 0/0/0\n(config-if)# ip ospf 10 area 0\n(config-if)# interface GigabitEthernet 0/0/1 \n(config-if)# ip ospf 10 area 0\n(config-if)# interface Loopback 0\n(config-if)# ip ospf 10 area 0"
    },
    {
        title: "passive interfaces",
        color: "maroon",
        description: "Use the passive-interface router configuration mode command to prevent the transmission of routing messages through a router interface, but still allow that network to be advertised to other routers. The configuration example identifies the R1 Loopback 0/0/0 interface as passive.\n\n**note**: loopback interfaces hebben dit niet nodig\n\n**note**: passive-interface default zet alle interfaces passive",
        commands: "(config-router)# passive-interface <interface>"
    },
    {
        title: "netwerk instellen als point to point",
        color: "maroon",
        description: "te gebruike als maar 2 routers aanwezig zijn, by default advertised loopback als /32 ook al is deze geen /32, bij point to point zal deze wel zijn correcte instellingen adverteren",
        commands: "(config-if)# ip ospf network point-to-point"
    },
    {
        title: "ip ospf priority",
        color: "maroon",
        description: "soms handiger op grote netwerken\n\n**note**: 0 wordt nooit DR/BDR, hogere priority = DR\n\n**note**: clear alle routers pas na alle instellingen aan te passen",
        commands: "(config-if)# ip ospf priority <value 0-255>\n# clear ip ospf process"
    },
    {
        title: "aanpassen reference bandwidth",
        color: "maroon",
        description: "default 10^8 alles > ref BW heeft cost 1\n\n**note**: commando in Mbps -> voor 1 Gigabit per sec gebruik 1000; default 100\n\n**note**: twee alternatieve commando's",
        commands: "(config-router)# auto-cost reference-bandwidth <Mbps>\n(config-if)# ip ospf cost <cost>"
    },
    {
        title: "modify intervals",
        color: "maroon",
        description: "no ip ospf xx-interval zet terug naar default",
        commands: "(config-if)# ip ospf hello-interval <seconds>\n(config-if)# ip ospf dead-interval <seconds>"
    },
    {
        title: "config static route for ospf",
        color: "maroon",
        description: "see also ip routing\n\n**Note**: When configuring static routes, best practice is to use the next-hop IP address. However, when simulating a connection to the internet, there is no next-hop IP address. Therefore, we use the exit-intf argument\n\n*note commando*: default-information originate",
        commands: "(config)# interface lo1\n(config-if)# ip address 64.100.0.1 255.255.255.252 \n(config-if)# exit\n(config)# ip route 0.0.0.0 0.0.0.0 loopback 1\n   %Default route without gateway, if not a point-to-point interface, may impact performance\n(config)# router ospf 10\n(config-router)# default-information originate\n(config-router)# end"
    },
    {
        title: "ACLs",
        color: "flag"
    },
    {
        title: "tonen access list",
        color: "orange",
        description: "",
        commands: "(config)#do show access-lists\n# show run | section access-list"
    },
    {
        title: "ACE instellen",
        color: "orange",
        description: "**note**: host vervangt naar 0.0.0.0 wildcard, any vervangt naar 0.0.0.0 255.255.255.255 ip *en* host\n**note2**: commando opgebouwd uit assumpties",
        commands: "(config)#access-list <ACL num> <permit/deny/remark <text>> <source ip> <wildcard> [log]\n(config)#access-list<ACL> <permit/block> <[host <hostip>]/any>"
    },
    {
        title: "aanmaken named acl",
        color: "orange",
        description: "named acls zijn beter dan nummers",
        commands: "(config)#ip access-list <standard/extended> <naam in hoofdletters>\n(config-ext-nacl)#<permit/deny commando>"
    },
    {
        title: "bind een acl",
        color: "orange",
        description: "omkeren met no ip access-group ...",
        commands: "(config-if) # ip access-group <access-list-number / access-list-name> <in / out>"
    },
    {
        title: "verwijderen acl via sequence number",
        color: "orange",
        description: "gebruik eerst *# show access-lists* om sequence numbers te tonen",
        commands: "(config)# ip access list <standard/extended> <acl num>\n(config-std-nacl)# no <sequence number>\n(config-std-nacl)# <sequence num> <deny/permit commando>"
    },
    {
        title: "toevoegen acl op VTY lines",
        color: "orange",
        description: "handig voor admin access, vooral in wordt gebruikt",
        commands: "(config-line)#access-class <access-list-number / access-list-name> < in / out >"
    },
    {
        title: "aanmaken extended acl",
        color: "orange",
        description: "operator checkt poorten (gebruik lt, gt, eq, neq)\n\n**note**: TCP can also perform basic stateful firewall services using the TCP established keyword. The keyword enables inside traffic to exit the inside private network and permits the returning reply traffic to enter the inside private network, as shown in the figure.",
        commands: "(config)# access-list <acl num> <deny / permit / remark text> <protocol> <source> <source-wildcard> [operator <port>] <destination> <destination-wildcard>\n\t[operator <port>] [established] [log]"
    },
    {
        title: "NAT",
        color: "flag"
    },
    {
        title: "configure static nat",
        color: "yellow",
        description: "",
        commands: `(config)# ip nat inside source static <inside local> <inside global>
(config)# interface <inside interface / outside interface>
(config-if)# ip add <ip>
(config-if)# ip nat <inside / outside>`
    },
    {
        title: "show commands",
        color: "yellow",
        description: "**NOTE**: *clear ip nat translation \** maakt de nat table leeg, andere opties dan \* zijn mogelijk",
        commands: `# show ip nat translations
# show ip nat statistics`
    },
    {
        title: "configure dynamic nat",
        color: "yellow",
        description: "**NOTE**: acl enkel voor te vertalen netwerk",
        commands: `(config)# ip nat pool <nat pool name> <starting ip> <ending ip> netmask <submask>
(config)# access-list 1 permit <network> <wildcard mask>
(config)# ip nat inside source list <acl num/name> pool <nat pool name>
(config)# int <inside interface>
(config-if)# ip nat inside
(config)# int <outside interface>
(config-if)# ip nat outside`
    },
    {
	    title:"configure PAT",
	    color:"yellow",
	    description:"",
	    commands:`(config)# ip nat inside source list <acl num> interface <outside interface> overload
(config)# access-list 1 permit <to translate network> <wildcard mask>
(config)# interface <inside interface>
(config-if)# ip nat inside
(config)# interface <outside interfac">
(config-if)# ip nat outside`
    },
    {
	    title:"PAT met address pool",
	    color:"yellow",
	    description:"",
	    commands:`(config)# ip nat pool <pool name> <start ip> <end ip> netmask <subnet mask>
(config)# access-list 1 permit <network start-end> <network wildcard mask>
(config)# ip nat inside source list 1 pool NAT-POOL2 overload
(config)# interface <inside if>
(config-if)# ip nat inside
(config)# interface <outside if>
(config-if)# ip nat outside`
    },
    {
		title:"BGP",
		color:"flag",
	},
	{
		title:"config bgp",
		color:"green",
		description:`**note**: bijvoorbeeld geen network mask bij 0.0.0.0 of andere default classfull waarden (192.168.9.9/24 is default)
**note**: een route naar <advertised network> moet bestaan maar moet niet direct verbonden zijn`,
		commands:`(config)# router bgp <eigen as-number>
(config-router)# neighbor <neighbor ip> remote-as <neighbor as-num>
(config-router)# network <eigen advertised network-address> [mask <eigen network mask>] `
	},
	{
		title:"bgp show commands",
		color:"green",
		commands:`# show ip route\n# show ip bgp\n# show ip bgp summary`
	},
	{
		title:"tunnels",
		color:"flag"
	},
	{
		title:"show commands",
		color:"blue",
		description:"",
		commands:`# show ip int br | include Tunnel\n# show int Tunnel <tunnel num>`
	},
	{
		title:"config gre tunnel",
		color:"blue",
		description:"**note**: gre is default op cisco devices\n**note**: uit te voeren op beide routers gebruikt voor tunnel",
		commands:`(config)# interface Tunnel<tnl nummer, geen spatie>
(config-if)# tunnel mode gre ip
(config-if)# ip add <ip voor tunnel> <subnet voor tunnel>
(config-if)# tunnel source <physical outgoing interface ip>
(config-if)# tunnel destination <andere router ingoing physical interface ip>
(config-if)# router ospf <ospf process num>
(config-router)# network <tunnel network> <wildcard mask> area <area>`
	},
    {
        title:"ipsec tunnel",
        color:"blue",
        commands:`(config)# crypto isakmp policy 1
(config-isakmp)# encryption <encryptie algoritme>
(config-isakmp)# hash <hash methode>
(config-isakmp)# authentication pre-share
(config-isakmp)# group <diffie-hellman group>
(config-isakmp)# lifetime <session key lifetime (seconds)>

(config)# crypto isakmp key <password> address <peer ip>
(config)# ip access-list extended <ipsec acl name>
(config-ext-nacl)# permit ip 10.10.10.0 0.0.0.255 20.20.20.0 0.0.0.255

(config)# crypto ipsec transform-set <transform set tag> esp-<zelfde encr algo> esp-<zelfde hash algo>-hmac
(config)# crypto map <crypto map name> <insert sequence, name 10> ipsec-isakmp
(config-crypto-map)# set peer <peer ip>
(config-crypto-map)# set transform-set <transform set tag>
(config-crypto-map)# match address <ipsec acl name>

(config)# interface <outgoing physical interface>
(config-if)# crypto map <crypto map name>
`
    },
    {
	title:"network management",
	color:"flag"
},
{
	title:"cdp",
	color:"fuchsia",
	description:"cisco only",
	commands:`(config)# cdp run
(config)# int <cdp interface>
(config-if)# cpd enable
# show cdp [neighbors [detail] | interface]`
},
{
	title:"lldp",
	color:"fuchsia",
	description:"niet zeker over show lldp interface",
	commands:`(config)# lldp run
(config)# int <llp interface>
(config-if)# cpd transmit
(config-if)# cpd receive
# show cdp [neighbors [detail] | interface]`
},
{
	title:"ntp",
	color:"fuchsia",
	commands:`(config)# # ntp server <ntp server ip>
# show clock detail
# show ntp associations
# show ntp status`
},
{
	title:"file maintenance",
	color:"fuchsia",
	description:"**note**: plaats config backups in tftp",
	commands:`# show file system
# dir [filesystem]
# cd <filesystem>
# pwd
# copy <source> <destination>`
},
{
	title:"password recovery",
	color:"fuchsia",
	description:"start in ROMMON mode via break sequence tijdens boot (Putty = ctrl+break)",
	commands:`rommon 1 > confreg 0x2142
rommon 2 > reset
# copy startup-config running-config
# configure terminal
(config)# enable secret <nieuw wachtwoord>
(config)# config-register 0x2102
(config)# end
# copy running-config startup-config
# reload`
},
{
	title:"update IOS",
	color:"fuchsia",
	description:"eerste commando is altijd een goede check\nop einde een show version commando is soms ook handig",
	commands:`# show flash
# copy tftp flash
# configure terminal
(config)# boot system flash:<new bin file name>
(config)# end
# copy running-config startup-config
# reload`
}
]

/*template
    {
        title:"",
        color:"",
        description:"",
        commands:""
    },
*/