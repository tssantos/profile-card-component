import React from 'react';

import Avatar from '../../assets/image-victor.jpg';

import styles from './styles.module.css';

interface ProfileCardProps {}

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className={styles['profile-card']}>
      <div className={styles['avatar']}>
        <img src={Avatar} alt='avatar'/>
      </div>
      <div className={styles['info']}>
        <p className={styles['name']}>Victor Crest</p>
        <p className={styles['age']}>26</p>
        <p className={styles['city']}>London</p>
      </div>
      <div className={styles['separator']}/>
      <div className={styles['stats']}>
        <div className={styles['container']}>
          <p className={styles['counter']}>80K</p>
          <p className={styles['label']}>Followers</p>
        </div>
        <div className={styles['container']}>
          <p className={styles['counter']}>803K</p>
          <p className={styles['label']}>Likes</p>
        </div>
        <div className={styles['container']}>
          <p className={styles['counter']}>1.4K</p>
          <p className={styles['label']}>Photos</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
