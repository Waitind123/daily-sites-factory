export const siteMeta = {
  "id": "remote-jobs",
  "emoji": "💼",
  "name": {
    "en": "Remote Jobs",
    "zh": "远程工作板"
  },
  "nav": [
    {
      "href": "/jobs",
      "label": {
        "en": "Jobs",
        "zh": "职位"
      }
    },
    {
      "href": "/post",
      "label": {
        "en": "Post",
        "zh": "发帖"
      }
    }
  ],
  "guideHref": "/guide/find-remote-job-china"
} as const;
export type SiteMeta = typeof siteMeta;
