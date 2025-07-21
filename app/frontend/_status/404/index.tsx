

import error404Image from "./assets/error.svg?url";

const App = () => {
  return (
    <div
      className="Polaris-Frame__Scrollable Polaris-Scrollable Polaris-Scrollable--vertical Polaris-Scrollable--scrollbarWidthThin"
      data-polaris-scrollable="true"
      id="AppFrameScrollable"
    >
      <div className="Polaris-Frame__Content _ChildContainer_r6730_7">
        <div className="Polaris-Frame__ScrollbarSafeArea">
          <div className="_PageIllustration_126wz_16">
            <div className="_ImageContainer_126wz_67">
              <img
                src={error404Image}
                alt="Illustration simplifiée de l’interface administrateur Shopify avec un code 404."
              />
            </div>
            <div className="_TextContainer_126wz_55">
              <h3
                className="Polaris-Text--root Polaris-Text--headingXl"
                tabIndex={-1}
              >
                Il n’y a pas de page à cette adresse
              </h3>
              <p className="Polaris-Text--root Polaris-Text--bodyLg Polaris-Text--subdued">
                Vérifiez l’URL et réessayez, ou utilisez la barre de recherche
                pour trouver ce dont vous avez besoin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
