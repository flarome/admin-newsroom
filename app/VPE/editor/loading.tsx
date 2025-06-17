import './styles/loading.css';

const Loading = () => {

    return (

<div
  className="flex items-center justify-center text-sm text-gray-700 font-medium h-12"
  role="status"
  aria-label="Chargement de l'éditeur en cours..."
>
  Chargement en cours
  <span className="ml-1 dots-loading" aria-hidden="true"></span>
</div>

  );

  return (

<div
  className="flex items-center justify-center space-x-1 h-12"
  role="status"
  aria-label="Chargement de l'éditeur en cours..."
>
 <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-gray-200 rounded-full animate-[pulseWave_1.4s_ease-in-out_infinite] [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-gray-200 rounded-full animate-[pulseWave_1.4s_ease-in-out_infinite] [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-gray-200 rounded-full animate-[pulseWave_1.4s_ease-in-out_infinite]"></div>
    </div>

</div>


  );
};

export default Loading;