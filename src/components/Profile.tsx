import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/73152699?v=4" alt="profile-image" />
      <div>
        <strong>Leandro Fonseca</strong>

        <p>
          <img src="icons/level.svg" alt="level-icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}