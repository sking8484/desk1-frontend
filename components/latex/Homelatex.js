import styles from './Homelatex.module.css';
import Latex from 'react-latex'

export default function Homelatex() {
  return (
  <div className = {styles.latexContainer}>
    <div className = 'second-title'>
      The Equation We are Solving
      <br/>
      <div className = 'large-title'>
        <Latex>$h^t\Sigma h - h^t\mu$</Latex>
      </div>
    </div>
    <p className = 'text'>
      where
      <br/>
      <Latex>
        $h =$ Asset Weights
      </Latex>
      <br/>
      <a href = 'https://deliverypdf.ssrn.com/delivery.php?ID=212089113126090127029127096007031076042017086048025010071117024087127100117115117102037061118123008002109090078122119025108087044069041033085108078126071119068082065030092067103007103013070117111109075000031089027089006006114073124075023084017081081002&EXT=pdf&INDEX=TRUE'>
        <Latex>
          $\Sigma =$ Covariance or Gerber Matrix
        </Latex>
      </a>

      <br/>
      <Latex>
        $\mu =$ Mean of Daily Returns - past 1 year
      </Latex>
    </p>
  </div>
  )
}