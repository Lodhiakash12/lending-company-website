export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* TOP ORB */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-20" />

      {/* RIGHT ORB */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-20" />

      {/* BOTTOM ORB */}
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-3xl opacity-20" />
    </div>
  );
}