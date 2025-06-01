import React, { useRef, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const DigitalSign: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [params] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const signedBy = params.get("by") || "admin";
  const { user, item } = location.state || {};

  const startDrawing = (e: React.MouseEvent) => {
    setIsDrawing(true);
    const ctx = canvasRef.current?.getContext("2d");
    ctx?.beginPath();
    ctx?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current?.getContext("2d");
    ctx?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx?.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const signature = canvas?.toDataURL("image/png");
    if (signature) {
      alert(`${signedBy.toUpperCase()} signature captured!`);

      if (signedBy === "hod") {
        // Notify admin to sign next
        navigate("/admin-final-sign", { state: { user, item } });
      } else {
        navigate("/final-confirmation");
      }
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        ✍️ {signedBy.toUpperCase()} Digital Signature
      </h2>
      <canvas
        ref={canvasRef}
        width={500}
        height={200}
        className="border border-gray-400 rounded"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
      />

      <div className="flex gap-4 mt-4">
        <button onClick={clearCanvas} className="bg-gray-500 text-white px-4 py-2 rounded">Clear</button>
        <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded">Save Signature</button>
      </div>
    </div>
  );
};

export default DigitalSign;
