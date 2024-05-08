import type { ShareServiceConfig } from "../../../shared/index.js";

export const weibo: ShareServiceConfig = {
  link: "http://service.weibo.com/share/share.php?url=[url]&title=[title]&pic=[cover|image]",
  color: "#D52C2B",
  shape:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M440 817c-148 13-277-53-286-148-11-96 102-185 252-200 148-15 277 52 286 148 11 96-103 185-252 200m299-319c-14-3-23-6-15-23 13-34 15-66 0-87-29-40-110-39-201-1 0 0-29 12-21-11 13-43 12-81-11-102-49-50-181 1-294 113-85 82-135 171-135 248 0 146 191 235 378 235 245 0 407-140 407-252 0-66-57-103-108-120m162-266c-59-65-147-89-227-72-19 4-30 21-27 40 5 18 23 29 41 26 58-12 120 4 162 51 40 43 54 105 36 162-6 18 3 36 20 42h1c18 6 37-4 43-21 27-79 8-168-49-228"/><path d="M811 311c-29-30-71-43-111-34-17 3-26 18-23 33v1c3 16 18 26 35 23 19-4 40 2 54 17 15 15 18 36 12 54a29 29 0 0 0 19 37c15 5 32-4 38-19 12-39 3-82-24-112M449 642c-6 9-18 14-27 9-9-3-10-12-6-21 5-9 17-13 26-9 9 3 12 12 7 21m-48 61a57 57 0 0 1-69 22 39 39 0 0 1-15-59c15-22 44-31 68-22 22 10 30 36 16 59m54-160c-70-18-151 17-181 78-32 62-2 131 70 154 74 24 162-12 192-80 30-66-7-134-81-152"/></svg>',
};
