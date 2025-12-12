import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBMI(bmiValue);
      
      // Determinar categoria e cor
      if (bmiValue < 18.5) {
        setCategory('Abaixo do Peso');
        setColor('#3b82f6'); // blue
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Peso Normal');
        setColor('#10b981'); // green
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Sobrepeso');
        setColor('#f59e0b'); // orange
      } else {
        setCategory('Obesidade');
        setColor('#ef4444'); // red
      }
    }
  };

  useEffect(() => {
    if (weight && height) {
      calculateBMI();
    } else {
      setBMI(null);
    }
  }, [weight, height]);

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
    setCategory('');
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculator}>
        <div className={styles.header}>
          <h2>🩺 Calculadora de IMC</h2>
          <p>Calcule o seu Índice de Massa Corporal em tempo real</p>
        </div>

        <div className={styles.inputsGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="weight">Peso (kg)</label>
            <input
              id="weight"
              type="number"
              placeholder="Ex: 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="1"
              max="300"
              className={styles.input}
            />
            <span className={styles.unit}>kg</span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="height">Altura (cm)</label>
            <input
              id="height"
              type="number"
              placeholder="Ex: 175"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min="50"
              max="250"
              className={styles.input}
            />
            <span className={styles.unit}>cm</span>
          </div>
        </div>

        {bmi && (
          <div className={styles.resultContainer}>
            <div className={styles.result} style={{borderColor: color}}>
              <div className={styles.bmiValue} style={{color: color}}>
                {bmi}
              </div>
              <div className={styles.bmiCategory} style={{color: color}}>
                {category}
              </div>
            </div>

            <div className={styles.bmiScale}>
              <div className={styles.scaleBar}>
                <div 
                  className={styles.scaleIndicator} 
                  style={{
                    left: `${Math.min((bmi / 40) * 100, 100)}%`,
                    backgroundColor: color
                  }}
                />
              </div>
              <div className={styles.scaleLabels}>
                <span className={styles.scaleLabel}>
                  <strong>&lt;18.5</strong><br/>Abaixo
                </span>
                <span className={styles.scaleLabel}>
                  <strong>18.5-25</strong><br/>Normal
                </span>
                <span className={styles.scaleLabel}>
                  <strong>25-30</strong><br/>Sobrepeso
                </span>
                <span className={styles.scaleLabel}>
                  <strong>&gt;30</strong><br/>Obesidade
                </span>
              </div>
            </div>

            <button onClick={handleReset} className={styles.resetButton}>
              🔄 Calcular Novamente
            </button>
          </div>
        )}

        {!bmi && (
          <div className={styles.placeholder}>
            <span className={styles.placeholderIcon}>📊</span>
            <p>Insira o seu peso e altura para ver o resultado</p>
          </div>
        )}

        <div className={styles.infoBox}>
          <strong>ℹ️ Sobre o IMC:</strong>
          <p>
            O Índice de Massa Corporal (IMC) é uma medida internacional usada para 
            calcular se uma pessoa está no peso ideal. É calculado pela fórmula: 
            <code>IMC = peso / (altura × altura)</code>
          </p>
        </div>
      </div>
    </div>
  );
}
