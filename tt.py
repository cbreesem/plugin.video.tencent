# -*- coding: utf-8 -*-

from urllib2 import Request, urlopen
# from urllib.error import URLError, HTTPError
from bs4 import BeautifulSoup
import re

# print('https: // v.qq.com/x/page/h03425k44l2.html\\\\n
#       https: // v.qq.com/x/cover/dn7fdvf2q62wfka/m0345brcwdk.html\\\\n
#       http: // v.qq.com/cover/2/2iqrhqekbtgwp1s.html?vid=c01350046ds')
# web = input('shuru')
# if re.search(r'vid=', web):
#     patten = re.compile(r'vid=(.*)')
#     vid = patten.findall(web)
#     vid = vid[0]
# else:
#     newurl = (web.split("/")[-1])
#     vid = newurl.replace('.html', ' ')

vid = '950h5k5p7h7m2qn'
getinfo = 'http://vv.video.qq.com/getinfo?vids={vid}&otype=xlm&defaultfmt=fhd'.format(vid=vid.strip())


def getpage(url):
    req = Request(url)
    user_agent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit'
    req.add_header('User-Agent', user_agent)
    try:
        response = urlopen(url)
    except HTTPError as e:
        print 'The server couldn\'t fulfill the request.'
        print 'Error code:', e.code
    except URLError as e:
        print 'We failed to reach a server.'
        print('Reason:', e.reason)
    html = response.read().decode('utf-8')
    return(html)

a = getpage(getinfo)
print a

soup = BeautifulSoup(a, "html.parser")
for e1 in soup.find_all('url'):
    ippattent = re.compile(
        r"((?:(2[0-4]\\\\d)|(25[0-5])|([01]?\\\\d\\\\d?))\\\\.){3}(?:(2[0-4]\\\\d)|(255[0-5])|([01]?\\\\d\\\\d?))")
    if re.search(ippattent, e1.get_text()):
        ip = (e1.get_text())
for e2 in soup.find_all('id'):
    idpattent = re.compile(r"\\\\d{5}")
    if re.search(idpattent, e2.get_text()):
        id = (e2.get_text())
filename = vid.strip()+'.p'+id[2:]+'.1.mp4'

getkey ='http: // vv.video.qq.com/getkey?format = {id} & otype = xml & vt = 150 & vid = {vid} & ran = 0 % 2E9477521511726081 & charge = 0 & filename = {filename} & platform = 11'.format(id=id, vid=vid.strip(), filename=filename)

b = getpage(getkey)

key = (re.findall(r'<key>(.*)<\\\\/key>', b))

videourl = ip+filename+'?'+'vkey='+key[0]

print('dizhi '+videourl)

