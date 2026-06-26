export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 40, maxWidth: 560 }}>
      <h1>飞书指令中枢</h1>
      <p>事件回调：<code>POST /api/feishu/event</code></p>
      <p>在飞书群 @机器人 发指令，例如：状态、部署 feature-vote、建站 xxx</p>
    </main>
  );
}
