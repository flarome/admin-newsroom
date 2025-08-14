import { createUseVPE } from "@VPE/lib";
import Styles from './styles.module.css';

import EditorSW from "@VPE/packages/WYSIWYG";
import {classnames} from "lib";

const useVPE = createUseVPE(); 

export const WYSIWYG = () => {
/* const data = useVPE((s) => s.WYSIWYG);
 const dispatch = useVPE((s) => s.dispatch);


  const onChange = (value) => {
    dispatch({
      type: "setData",
      data: { WYSIWYG: value },
    });
  };*/
 

  return (
           <div
                className={classnames(
                  Styles.StaticIframe,
                  Styles.visible
                )}
              >
              
  <EditorSW />

  </div>
  )
}

/*
      <div
                  className={clsx(
                    EditorStyles["StaticIframe"],
                    canRenderEditor && EditorStyles["visible"]
                  )}
    


                >
{canRenderEditor &&  <EditorSW />}
                 



                </div>
*/
