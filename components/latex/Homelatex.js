import styles from './Homelatex.module.css';
import Latex from 'react-latex'

export default function Homelatex() {
  const qpFormula = `$$
      \\Psi(\\vec{h}) =
        \\vec{h}^t\\Sigma \\vec{h} - \\vec{h}^t\\mu
      $$
    `
  const qpConstraint1 = `$$
      \\sum_{n=1}^{N}h_n = \\lambda
      $$`
  const qpConstraint2 = `
  $$h_n \\geq 0, \\forall_n$$`
  console.log(qpFormula);
  return (
  <div className = {styles.latexContainer}>
    <div className = 'second-title'>
      The Equation We are Solving
      <br/>
      <div className = 'large-title'>
        <Latex>
          {qpFormula}
        </Latex>
        <p className = 'text'>Given the following constraints</p>
        <Latex>
          {qpConstraint1}
        </Latex>
        <br/>
        <Latex>
          {qpConstraint2}
        </Latex>
      </div>
    </div>
    <p className = 'text'>
      where
      <br/>
      <Latex>
        {`$\\vec{h} =$ Asset Weights`}
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
      <br/>
      <Latex>
        $\lambda =$ A leverage dial with $\lambda \geq 1$ means leverage of $\lambda-1$
      </Latex>
      <br/>
      <Latex>
        $N =$ number of assets
      </Latex>
    </p>
  </div>
  )
}