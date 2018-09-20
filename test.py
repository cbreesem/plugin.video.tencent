# -*- coding: utf-8 -*-

import urllib, urllib2, re, string, sys, os, gzip, StringIO
import json
import simplejson

headers = {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
           'Accept-Encoding': 'gzip, deflate, sdch, br',
           'Accept-Language': 'zh-CN,zh;q=0.8',
           'Connection': 'keep-alive',
           'Upgrade-Insecure-Requests': '1',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'}


def getHttpData(url,data={},header=headers):
    data = urllib.urlencode(data)
    req = urllib2.Request(url,data,headers=header)
    try:
        response = urllib2.urlopen(req)
        httpdata = response.read()
        charset = response.headers.getparam('charset')
        if response.headers.get('Content-Encoding') == 'gzip':
            httpdata = gzip.GzipFile(fileobj=StringIO.StringIO(httpdata)).read()
        response.close()
    except:
        pass
        # xbmc.log( "%s: %s (%d) [%s]" % (
        #     __addonname__,
        #     sys.exc_info()[ 2 ].tb_frame.f_code.co_name,
        #     sys.exc_info()[ 2 ].tb_lineno,
        #     sys.exc_info()[ 1 ]
        #     ), level=xbmc.LOGERROR)
        return ''
    match = re.compile('<meta http-equiv=["]?[Cc]ontent-[Tt]ype["]? content="text/html;[\s]?charset=(.+?)"').findall(httpdata)
    if len(match)>0:
        charset = match[0]
    if charset:
        charset = charset.lower()
        if (charset != 'utf-8') and (charset != 'utf8'):
            httpdata = httpdata.decode(charset, 'ignore').encode('utf8', 'ignore')
    return httpdata

def getParams():
    param = {}
    paramstring = sys.argv[2] if len(sys.argv) >= 3 else []
    if len(paramstring) >= 2:
        params = sys.argv[2]
        cleanedparams = params.replace('?', '')
        if (params[len(params) - 1] == '/'):
            params = params[0:len(params) - 2]
        pairsofparams = cleanedparams.split('&')
        param = {}
        for i in range(len(pairsofparams)):
            splitparams = {}
            splitparams = pairsofparams[i].split('=')
            if (len(splitparams)) == 2:
                param[splitparams[0]] = splitparams[1]
    return param

if __name__ == '__main__':
    data = dict(
        callback = 'txminiplayerJsonpCallBack_getinfo_249496',
        isHLS = False,
        charge = False,
        vid = 'i1585usr94p',
        defn = 'auto',
        defnpayver = 0,
        otype = 'json',
        guid = '3c58653b2ab390e13bd164ddc5627241',
        platform = '2350201',
        sdtfrom = 'v1095',
        host = 'v.qq.com',
        ehost = 'https://v.qq.com/x/cover/950h5k5p7h7m2qn.html', # 播放页面地址
        sphttps = 1,
        _qv_rmt = 'FyDoQc4wA134524Zg=',
        _qv_rmt2 = 'XUgJwnIa157296NGg=',
        _ = '1537425336768'
        )
    res = getHttpData('http://vv.video.qq.com/getinfo',data)

    print res

    # res = json.loads(res.replace(data['callback'],'')[1:-1])

    # for k,v in res['vl'].items():
    #     print k,v
