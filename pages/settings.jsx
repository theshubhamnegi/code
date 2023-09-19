import ThemeInfo from '../components/ThemeInfo';
import styles from '../styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <>
      <h2>Manage Themes</h2>
      {/* <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          icon="/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
          description="GitHub theme for VS Code"
        />
        <ThemeInfo
          name="Dracula"
          icon="/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
          description="Official Dracula Theme. A dark theme for many editors, shells, and more."
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-mirage"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Nord"
          icon="/nord.png"
          publisher="arcticicestudio"
          theme="nord"
          description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
        />
        <ThemeInfo
          name="Night Owl"
          icon="/night-owl.png"
          publisher="sarah.drasner"
          theme="night-owl"
          description="A VS Code theme for the night owls out there."
        />
        <ThemeInfo
          name="Unnamed"
          icon="/unnamed.png"
          publisher="wrake"
          theme="unnamed"
          description="A special custom theme made by WRAKE."
        />
      </div> */}
      <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          icon="https://github.com/Shubham180401/code/blob/main/public/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
          description="GitHub theme for VS Code"
        />
        <ThemeInfo
          name="Dracula"
          icon="https://github.com/Shubham180401/code/blob/main/public/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
          description="Official Dracula Theme. A dark theme for many editors, shells, and more."
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="https://github.com/Shubham180401/code/blob/main/public/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon="https://github.com/Shubham180401/code/blob/main/public/ayu.png"
          publisher="teabyii"
          theme="ayu-mirage"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Nord"
          icon="https://github.com/Shubham180401/code/blob/main/public/nord.png"
          publisher="arcticicestudio"
          theme="nord"
          description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
        />
        <ThemeInfo
          name="Night Owl"
          icon="https://github.com/Shubham180401/code/blob/main/public/night-owl.png"
          publisher="sarah.drasner"
          theme="night-owl"
          description="A VS Code theme for the night owls out there."
        />
        <ThemeInfo
          name="Unnamed"
          icon="https://github.com/Shubham180401/code/blob/main/public/unnamed.png"
          publisher="wrake"
          theme="unnamed"
          description="A special custom theme made by WRAKE."
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;
