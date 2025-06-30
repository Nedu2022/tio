import img from '../../assets/depression.jpg';

const CombinedClipImage = () => {
  return (
    <div className="w-[400px] h-[400px] mx-auto relative">
      <svg width="0" height="0">
        <defs>
          <clipPath id="combinedClip" clipPathUnits="objectBoundingBox">

            <circle cx="0.5" cy="0.5" r="0.5" />
         
            <rect x="0.25" y="0.25" width="0.5" height="0.1" />
           
            <ellipse cx="0.5" cy="0.7" rx="0.3" ry="0.15" />
          </clipPath>
        </defs>
      </svg>

      <img
        src={img}
        alt="Combined shape"
        className="w-full h-full object-cover"
        style={{
          clipPath: 'url(#combinedClip)',
        }}
      />
    </div>
  );
};

export default CombinedClipImage;
