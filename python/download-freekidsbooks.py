from bs4 import BeautifulSoup
import requests

START_PAGE=3
STORAGE_FOLDER="/Users/WYK46451/Desktop/freekidsbooks"
URL="https://freekidsbooks.org/page/%s/"

count=START_PAGE
while True:
  print("[ Requesting page", count, "]")
  r = requests.get(URL % count)
  if r.status_code == 200:
    soup = BeautifulSoup(r.text, "html.parser")
    nodes = soup.select('a.download-book')
    for node in nodes:
      if str(node.string).startswith('Download Free PDF -'):
        download_url = node["href"]
        file_name = download_url.split("/")[-1]
        dwn_handle = requests.get(download_url, allow_redirects=True)
        open(STORAGE_FOLDER + "/" + file_name,  "wb").write(dwn_handle.content)
        dwn_handle.close()
        print(" Downlaoded -", file_name)
    r.close()
    count += 1
    if len(nodes) <= 0:
      break
  else:
    break
