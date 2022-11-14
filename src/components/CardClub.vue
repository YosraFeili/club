<template>
  <div class="">
<div :class="{
  football: type === 'footballCard',
  prize: type === 'prize',
  qa: type === 'qa',
  marathon: type === 'marathon'
}">
  <div class="space-y-2">
    <div class="text-lg mt-3 cursor-pointer">{{title}}</div>
    <div class="text-sm mt-3 cursor-pointer">{{subTitle}}</div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'CardClub',
  props: {
    title: String,
    subTitle: String,
    type: String
  }
}
</script>

<style scoped>
.football{
  height: 120px;
  display: flex;
  justify-content: end;
  background: #ffd500 url("http://preproduction.lenz.ir/img/football-bet-bg.2c6ac4f1.svg") no-repeat;
  border-radius: 5px;
  padding: 1.25rem 1.25rem 1.25rem 0;
  text-align: right;
  color: white;
  font-family: Yekan;
}
.prize {
  height: 120px;
  display: flex;
  justify-content: end;
  background: #ffae73 url("http://preproduction.lenz.ir/img/buy-score.3b6c764e.svg") no-repeat;
  border-radius: 5px;
  padding: 1.25rem 1.25rem 1.25rem 0;
  color: white;
  font-family: Yekan;
}
.qa {
  height: 120px;
  display: flex;
  justify-content: end;
  background: #73ff9a url("http://preproduction.lenz.ir/img/qa-bg.eacebe19.svg") no-repeat;
  border-radius: 5px;
  padding: 1.25rem 1.25rem 1.25rem 0;
  text-align: right;
  color: white;
  font-family: Yekan;
}
.marathon {
  height: 120px;
  display: flex;
  justify-content: end;
  background: #ebd8d0 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF82lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgMTE2LmRkYzdiYzQsIDIwMjEvMDgvMTctMTM6MTg6MzcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTAtMjZUMTU6MzQ6MzQrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEwLTI2VDE2OjAzOjUwKzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEwLTI2VDE2OjAzOjUwKzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU4ZDQxYmNhLTI0YzktNjQ0Zi05ZTU2LWJmOWExMzFjMmI4ZCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJhNzg3NjE1LTdkZDktZGU0My04YTliLWU4NzkyYTcyMGFhNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjU0NDA3Y2ZmLTg3OTEtZTA0Ny04OWZkLTlhNjNlOTQ3ZWEzOSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTQ0MDdjZmYtODc5MS1lMDQ3LTg5ZmQtOWE2M2U5NDdlYTM5IiBzdEV2dDp3aGVuPSIyMDIyLTEwLTI2VDE1OjM0OjM0KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU4ZDQxYmNhLTI0YzktNjQ0Zi05ZTU2LWJmOWExMzFjMmI4ZCIgc3RFdnQ6d2hlbj0iMjAyMi0xMC0yNlQxNjowMzo1MCswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsF1CdsAAAW5SURBVHic7Z1LiBxVFEDPq093mzhl0jPpTOIHI7gSdCu4EAlRoxI/QTEuFBT8oG5E8I8f/IMoglExikEEQZNoxqiJLnThRkTcuHAhWagz6fGDisl0d/V710V1J5rMOJ3pJHXRe2Bguqer6k6duvfdqlc140QEQw9R2QEY/8SEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKMOEKCNhywZY0ToJ170NcY0SY/HADnDv4nrvDHKHUpRAt43/4RvotovXAyEQ15CZvefJH79skLyTlHJ4BiCtduOR+pvxGSd+lrA4z3DhLXDnlBDOwVwD3A68dlS3IoKrVJHWvgvCbz9vxufLS6sVEZC38b/+tC76Obs0YWnrdXykQQbAIpBXERfh2HRUtiAClSrS3neJn56akABu0KQ6WkQgne7y/NvvtkZ0o8tLDmcW5BXgliO/2kIG7Zk1vjk1QQCXHvGtLAhXBQndlRGd1m5EwLn5lzqWiGykKF9HjkLGWt+c2lXUbgYbp44B4sGBjzj15KuRAN6XHdMsyPMcqUxJK9BprfHNyQ8IokoGAehCsnLVnRGrTv+CdHQdoQsSyg5tFmQjcPNQq0gr0J453+/5cReCLhlSZEe6ZOlj0crTnoto7YUkm6CybD3itUp5EbhxQYv2ZTSndhKABF0yupAsHX0mysbvpz3Ta/Ykh+SErVQbl4JaKS8D1x7WIoWMi3xzcqe6MtWXUR97Ks5W3Em3AyL97ltAOpBk26k0rlAsZTNwwwCf68tY45uTO9SVqdCXMfpsnI3fTbe9f3//83QodCDJtlFpXKa4fG0Cbpr7xwJJFdozF/rm1C7RVqZCsVuT+tjTcbbijiIzDjRUh56fFlLeo9q4UrGUl4DrZnm/aG3z1rm+OfmhBCnOM7TI6A3gydKxx+Ns/K4DmXHglGP2CwaFlHeoNi5TXL5e5+DyldagPbPaNyc/RdApoz72ZJyN31fIODS4ua/g9DOl0li/P8/UIZuA68HhkhRp71vtp6c+wYu+MlVkxhNxNn7PXDJgvsvvhZStVBprFUt5lTi+WFr7zgrN6U/UdVO93ZbWlz0cZ+P3/psMGGQ+JHQgOf4javUrEIVSogh8/r7/Zc/XBCBGlwwPyWjjsShb8dB8MmDQCSrpQHL8NqqNdSrHlH48mqbb9ndTyx6OR8bvp9uaVwYczq8QcohHJqg0rtInxem6ONrLjLTeeCAeWf7QoDLgcI8pySHJ3tZ98lgy/TJVX/Z4NNJ49HBkACREMXhX1F2Z4yhzva/gwOcQnbCN2K2jPb394D76mCMBOl1kpgstigG9LHq7Ih1d8ki0qP4gM3/2rqvHvVjnECMCIUDwJOQtqIVCyFxp76QnJFB8sAWVxRMsGr0Ot3dzMZKWRJxCB+JTVkEnh7jEgUQcURq/EVWzBwkeKr2pyP5+nStR+kIqVRJ+3wPLBz3CO3/7Poeo8jFxtdyuJgby40g4G7qh6LrKwgGJ+xzfYUE7RYThZpNDGKfsea3gIA/Q2gu5lJqsCFBL6iTxgg/SBOf09O1DI5Q6nsGB8rPAv7KkqXM3MCHqMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKMCHKGFaIoocy1OCGuRM0IVSH2LakRJ35P/a/QSAki3EJhIVZSah+P0QAbjf5GMUdzvbwDiGCkT++ouaHEBJqQ0TgpnG8gMitQ6zkv4EPUE2/xNW20PFD3P0u2RBRCAi3Ad8CZ1LuwwDlUkt/ZFH6JLkbqlg4++fEurC2VxkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBkmRBl/AQRhLhL/+6yOAAAAAElFTkSuQmCC") no-repeat;
  border-radius: 5px;
  padding: 1.25rem 1.25rem 1.25rem 0;
  color: white;
  font-family: Yekan;
}
</style>
