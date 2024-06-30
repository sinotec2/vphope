---
title: 管理者的權責
icon: fab fa-chrome
sticky: 104
order: 106
footer: '<script data-embed-id="161b8da2-9a5a-4f59-a48a-71da27475d9e" data-base-api-url="https://eng06.sinotech-eng.com:3015/api/embed"  data-window-height="550px" data-position="bottom-left" data-chat-icon="support" src="anythingllm-chat-widget.min.js"></script><script src="https://busuanzi.ibruce.info/pintuer/1.0/pintuer.mini.js"></script><script src="https://busuanzi.ibruce.info/respond/1.4.2/respond.min.js"></script><script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script><p class="text-small text-grey-dk-100 mb-0"><i class="fa fa-eye"></i> <span id="busuanzi_container_page_pv">  <span id="busuanzi_value_page_pv"> </span>  views &emsp;</span><i class="fa fa-earth"></i> <span id="busuanzi_container_site_pv"> <span id="busuanzi_value_site_pv"> </span>  site_visits &emsp;</span><i class="fa fa-user"></i><span id="busuanzi_container_site_uv"> <span id="busuanzi_value_site_uv"></span> visitors</span></p>'
---

## 背景

- 此處介紹[管理者](AnyChat_adm.md)在系統設定方面的權責，其中有些也是[經理](AnyChat_mng.md)可以管理的範圍。
- [經理](AnyChat_mng.md)及管理者可以設定的部分，詳下表。
  - 最大的差別在於管理者對API金鑰與使用紀錄(ip)的管理與監視，這些都與**經費資源**的管理有關。
  - 技術部分：管理者對個別LLM應用如逐字稿、嵌入器、小幫手、向量資料庫等的設定，對整體系統功能有絕對的影響力。

### 對應關係表

事業|部門|技術組|英文簡稱|伺服器
-|-|-|-|-
環工事業一|環境規劃一部|環評組|EIA|[3001](http://eng06.sinotech-eng.com:3001)
環工事業一|環境規劃一部|風機組|Wind|[3002](http://eng06.sinotech-eng.com:3002)
環工事業一|環境規劃一部|空品組|Air|[3003](http://eng06.sinotech-eng.com:3003)
環工事業一|環境規劃一部|減碳組|Carbon|[3004](http://eng06.sinotech-eng.com:3004)
環工事業一|水務工程部|管線組|Pipeline|[3005](http://eng06.sinotech-eng.com:3005)
環工事業一|水務工程部|廠站組|Water|[3006](http://eng06.sinotech-eng.com:3006)
環工事業二|環境規劃二部|廢棄物組|Waste|[3007](http://eng06.sinotech-eng.com:3007)
環工事業二|環境規劃二部|土水組|Soil|[3008](http://eng06.sinotech-eng.com:3008)
環工事業二|能資源設施部|興建組|Construction|[3009](http://eng06.sinotech-eng.com:3009)
環工事業二|能資源設施部|營管組|Operation|[3010](http://eng06.sinotech-eng.com:3010)
環工事業二|能資源設施部|產業輔導組|Counseling|[3011](http://eng06.sinotech-eng.com:3011)
支援|研發及資訊部|研資部|ICT|[3012](http://eng06.sinotech-eng.com:3012)
支援|行政及支援部|行政部|Admin|[3013](http://eng06.sinotech-eng.com:3013)

### AnythingLLM設定與權責

項目|[經理](AnyChat_mng.md)|管理者|功能目的
:-|:-:|:-:|-
[系統偏好設定](#系統偏好設定)|x|x|使用者刪除、使用者對話次數上限
[邀請連結](#邀請連結)|x|x|點入連結即可新增使用者
[使用者管理](#使用者管理)|x|x|新增編輯停權及刪除
[工作區列表](#工作區列表)|x|x|新創及刪除工作區
[工作區對話](#工作區列表)|x|x|檢視輸出或刪除
[外觀](#外觀)|x|x|logo參考及支援
[API Keys](#api-keys)||x|批次設定作業，可以用curl指令或在swagger UI環境
[LLM偏好](#llm偏好)||x|內定LLM、給定LLM之API token
[逐字稿模型](#逐字稿模型)||x|Whisper之內定細節
[嵌入器偏好](#嵌入器偏好)||x|除內裝引擎外，提供了2個雲端及2個地端選項
[向量資料庫](#向量資料庫)||x|系統有8種方案可以選擇
[嵌入對話](#嵌入對話)||x|[AI小幫手](./EmbChat.md)
[事件紀錄](#事件紀錄)||x|檢視使用者登入IP
[隱私權](#隱私權)||x|

![](adm_pngs/2024-04-26-15-21-53.png)|![](adm_pngs/2024-05-07-17-21-13.png)
:-:|:-:
[經理](AnyChat_mng.md)權責範圍(6項)|管理者權責(14項)

## 管理者的任務

- 基本上管理者除了一般使用者與[經理](AnyChat_mng.md)的權責之外，還必須負責「INSTANCE SETTINGS」中大半項目的設定，很多是與LLM的統一設定(與經費)有關。

### 系統偏好設定

這裡進行實例的整體設定和配置。

- 使用者可以刪除工作區：
  - 允許使用者刪除他們所屬的工作區。 
  - 這項設定將會影響到工作區的其他人。
- 限制每個用戶每天的訊息數
  - 限制使用者在 24 小時內只能進行成功查詢或聊天的次數。
  - 啟用此功能可防止使用者增加 OpenAI 或其他付費方案的成本。
- 這項設定是管理者與[經理](AnyChat_mng.md)都可以更改的，也沒有限定使用者與工作區的範圍，是作用在全系統。如有不同的設定需求需要進一步協調。

![](adm_pngs/2024-04-26-14-29-45.png)

### 邀請連結

- 這項功能會產生一次性、訪問特定工作區、新增使用者的連結，可以減省管理者新增使用者的工作，讓使用者自行鍵入名稱及密碼。
  - 工作區的成員設定只能就現有的使用者，勾選加入其工作區，並不能產生新的使用者。
  - 連結新創使用者，不能指定特定的名稱。
  - 一旦接受邀請，連結就會失效。
  - 系統還沒有開放批次作業的方式，如果要產生多個邀請連結，以便寄給多個對象，必須依序逐一進行勾選。
- 如圖中範例，sinotec2接受了邀請，還有一條連結產生了卻還沒有人回應。[範例連結](http://eng06.sinotech-eng.com:3001/accept-invite/0TJ37Y0-7FE41X0-GVMEZ5T-T6AT522)

![](adm_pngs/2024-04-26-14-37-19.png)

- 點選產生邀請連結後的畫面
- 須至少點選一個工作區
- 按下`Create Invite`會產生一個連結，將其複製到email中即可發出(或其他散布途徑)。

![](adm_pngs/2024-04-26-14-35-09.png)

- 點選連結後出現新創使用者的畫面
- 輸入帳密、接受邀請後，將會開啟AnythingLLM對話窗，並自動登入新帳號。
- 工作區的成員也會自動加入，不必另外設定。如果由管理者新增使用者，還需要各個工作區新增成員、另外通知使用者初始帳密，登入後再修改密碼。

![](adm_pngs/2024-04-26-14-34-32.png)

### 使用者之管理

- 此處可以新增、編輯、停權或刪除使用者權限
1. 新增：帳號、密碼、權限角色
2. 編輯：更改密碼、 權限角色
3. 停權：立即登出、並不得再登入，帳號及記錄依然存在
4. 刪除：無可回復

![](adm_pngs/2024-04-26-15-14-07.png)

- 由於系統內沒有使用者的其他訊息，因此強烈建議使用者需按照管理者的安排命名，這樣才能建立正確的（費用）連結。

### 工作區列表

- 這裡提供所有工作區的列表，可以在此檢視各個工作區的連結(分享)、參與人數、起始時間、也可快速刪除工作區。
- 此處新增工作區，會要求鍵入工作區名稱，與主畫面新增工作區效果一樣。

![](adm_pngs/2024-04-26-16-28-51.png)

### 工作區對話

- 管理工作區的對話紀錄，包括檢視、輸出、或刪除
- 沒有排序、篩選、整併、計數等功能，需輸出成檔案進一步分析。

![](adm_pngs/2024-04-26-16-22-01.png)

### 外觀

- 此處控制系統的logo、對話框的初始訊息、參考連結、及技術支援email
- 內定之系統訊息

![](adm_pngs/2024-04-26-16-57-59.png)

- 鍵入訊息後要儲存才會生效

![](adm_pngs/2024-04-26-17-07-49.png)

- 回到首頁後就會即時出現訊息

![](adm_pngs/2024-04-26-17-11-48.png)

### API Keys

- AnythingLLM提供了swagger API伺服器，可以從命令列來控制系統，這在測試或生產階段以批次方式提供解析服務的情況，是非常有用的工具。
- 除了API伺服器UI之外，還提供了API Key的產生程式，以提供後端連線時密鑰。

![](adm_pngs/2024-05-01-07-26-38.png)

- 後台批次設定作業，必須在此取得API金鑰，由curl或其他指令、或在swagger UI介面進行操作。
- 批次新增使用者的作業方式(以python程式進行`curl`指令之迴圈控制)，詳見[add_user.py程式說明](./add_users.md)。
1. 按下產生金鑰，以產生新的API金鑰。(舊的似乎不會自動失效，如果不再需要，須個別刪除) 
2. 複製金鑰，在curl指令中使用`curl -H "Authorization: Bearer ******"`，或在swagger UI介面套用。
3. 點選API文件，進一步說明以及(或)UI介面操作。

![](adm_pngs/2024-05-07-11-16-34.png)

1. 進入swagger介面後，如果要修改，會需要將Authorize關閉，點選右上角鎖頭或每一項操作的鎖頭，都可以進行關閉動作。
2. 點入鎖頭後，會需要輸入API金鑰。
3. 輸入後，點選Authorize(授權)、鎖頭會呈現閉鎖狀態。
4. 離開輸入介面，按下關閉，或右上角`x`，進行個別分項的查詢、修改、或設定。

![](adm_pngs/2024-05-07-11-24-08.png)

### LLM偏好

- 就是內設的語言模型。給定新的API key，也必須由此進入。
- 如果工作區使用的是內設語言模型，從此處修改，將會一次修改所有的工作區設定。
- 設定之後需按下儲存使設定生效。

![](adm_pngs/2024-05-01-07-35-02.png)

1. 下拉選單選擇LLM提供者，作為內定LLM。
2. 給定API key。
   - 此為管理者重要權責，因與付費有關，一般使用者及[經理](AnyChat_mng.md)都無權限更改。
   - 此欄具自動隱密性、只能貼上，不能讀取，即使是管理者也無法由此複製API key內容。
3. 選擇模型：
  - 同樣，也與經費有關。
  - 就LLM之細項模型，[經理](AnyChat_mng.md)也可以在工作區進行局部更改，**這將會改變個別工作區付費的費率。**
4. 儲存改變
5. LLM模型考量
  - 雲端服務：不見得最新是最好，還要看供應商提出的費率，選擇又新、又便宜的方案。
  - 地端雖然完全免費，但因開源的語言模型與最新商用版，期間至少有半年以上的落差，LLM資料庫及應答能力會有不小差距，除非是機敏資料、需要解析大量文檔，否則地端LLM似乎沒有競爭力。

### 轉錄逐字稿模型

- 這裡設定whisper模型的內定細節。
- 語音檔案輸入的方式，詳見[GH倉庫及影音檔案之連結](./AnyChat.md#gh倉庫及影音檔案之連結)。
- 系統提供了2個選項
  - 下圖是內設公開版的whisper，使用地端資源，有RAM及檔案大小的限制。
  - 也可以付費使用openAI的其他whisper選項，
  - 設定後，[經理](AnyChat_mng.md)可以在其工作區選取內定逐字稿模型。

![](adm_pngs/2024-05-07-13-00-28.png)

- 可以選擇內建（本機執行）或是openAI 的whisper等2種語言模型。
- 同樣的，更改選擇之後，需要按下儲存才能生效。

![](adm_pngs/2024-05-01-07-42-08.png)

### 嵌入器偏好

- 嵌入器（Embeder）和下面會談到的AI小幫手是不同的服務方式

項目|嵌入器（Embeder）|嵌入式對話框
-|-|-
嵌入|將檔案嵌入到使用者的提示中|嵌入網頁、成為AI小幫手
本質|自然語言轉換器|LLM服務的連接器
作用|將輸入檔轉成數字向量|提供對話
必要性|解析檔案時一定會使用到|額外服務
服務對象|經理以上|無帳密管理任何人
對話框|無|聊天機器人
收費|使用外部API處理大檔|只有對話的token

- 系統提供了5個選項，除了系統內裝的嵌入器以外，其餘分別是
  - openAI 非商業用途標準選項
  - Azure openAI
  - local AI(地端)
  - Ollamma(地端)

![](adm_pngs/2024-05-07-13-13-17.png)

### 向量資料庫

- 共提供了8種向量資料庫的讀寫軟體形式

![](adm_pngs/2024-05-07-17-08-38.png)
![](adm_pngs/2024-05-07-17-09-04.png)

### 嵌入對話

- 嵌入對話是對外開放、不需帳密、沒有IP紀錄的對話小幫手，因此在管理上需要有特殊考量：  
  - 以資料查詢為主，避免開放式問答
  - 限制發問者的網域，增列發問者的白名單
  - 每天最多問答的限制
  - 動態LLM及溫度的設定，以避免濫用。
  - 機敏性對話，如內部規章、合約條文等等：應設定以地端GPT來進行小幫手服務。
- 詳見[新創修改小幫手](./EmbChat.md#新創修改小幫手)

![](emb_pngs/2024-04-23-16-14-16.png)

### 事件紀錄

- 觀察重點
  - 登入IP，使用者名稱如無法辨識，可以由IP判斷其登入桌機位置。
  - 登入錯誤：可由詳細記錄中找出使用者是否鍵入錯誤名稱
  - 新創工作區及上傳檔案。

![](adm_pngs/2024-05-07-13-59-43.png)

### 隱私權

- 系統中使用第三方程式碼的授權等問題

![](adm_pngs/2024-05-07-17-23-27.png)

## API Token Usage Checking

- 管理者最重要的工作就是外部語言模型的費用及帳單管理。其他角色無法代勞。
- 一般LLM提供的公司，其API與chatbot是2個不同的服務，也有個別的帳戶、帳單管理、有不同的計費架構，要登入到正確的管理網頁。

### openAI

- [API費率](https://openai.com/api/pricing/)：openAI常常推出優惠方案，請自行上網選購、調整。也要注意**優惠期限**，優惠結束後，費率可能會有較高的漲幅。
- 點選左側長條圖。
- 出現當月的總用量，各個模型的token數、以及總費用
- 如果要了解餘額，要點選全機構的帳單

![](adm_pngs/2024-05-09-06-42-17.png)

- 出現信用卡帳單：餘額/總額
- 總額包括openAI送的18USD
- 歷次請款記錄也會列在下面提供稽核

![](adm_pngs/2024-05-09-06-47-05.png)

### Anthropic

- 登入[Anthropic API](https://console.anthropic.com/login?returnTo=%2F%3F)
- 點選右上角頭像進入個人設定下拉選單，選擇用量（Usage）
- 點選左側用量（Usage），會出現過去31日的每天輸入與輸出的token總數，可以檢討使用情形

![](adm_pngs/2024-05-09-06-23-20.png)

- 點選左側(或個人設定下拉選單)計畫與帳單(Plan and Billing)，可以看到目前計畫內還有多少存款，如果不足，需要再加值。

<!--
<script
  data-embed-id="a2e45476-ed9e-42bc-8244-0b9b625e78d8"
  data-base-api-url="https://eng06.sinotech-eng.com:3014/api/embed"
  src="https://eng06.sinotech-eng.com:3014/embed/anythingllm-chat-widget.min.js">
</script>
<!-- AnythingLLM (https://useanything.com) -->
