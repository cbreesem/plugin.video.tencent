# -*- coding: utf-8 -*-
#
import requests

headers = {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
           'Accept-Encoding': 'gzip, deflate, sdch, br',
           'Accept-Language': 'zh-CN,zh;q=0.8',
           'Connection': 'keep-alive',
           'Upgrade-Insecure-Requests': '1',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'}

data = dict(
    ccode = '0502',
    drm_device = 7,
    drm_type = 1,
    duration = 5987,
    encr = 0,
    expire = 18000,
    onOff = 0,
    psid = '7c81d7e7064652c54325e9fbc96db571',
    type = 'mp4',
    ups_client_netip = '7ce4a60d',
    ups_key = '058445332d3f6710d0b24629dfe70fa7',
    ups_ts = 1537435438,
    utid = 'V/pVEySjqVUCATszNzOZ/Az6',
    vid = 'XMTM5OTY1NTI4MA',
    )

res = requests.get('http://pl-ali.youku.com/playlist/m3u8',data,headers=headers)
print(res.content)