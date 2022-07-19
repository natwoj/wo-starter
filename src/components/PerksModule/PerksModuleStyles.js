import styled from "styled-components"

export const PerksModuleStyles = styled.section`
  position: relative;

  .perks__image--bg,
  .perks__image--overlay {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 15px;
  }
  .perks__image--bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .perks__image--overlay {
    background-color: rgba(0, 0, 0, 0.85);
  }

  .perks__divider {
    font-size: 30px;
    color: var(--primary);

    @media (min-width: 1024px) {
      font-size: 35px;
    }
  }

  > .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    align-items: center;
    margin-bottom: 80px; 

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 1024px) {
      gap: calc(var(--gap) * 0.125);
    }

    @media (min-width: 1200px) {
      gap: calc(var(--gap) * 0.125);
    }
  }
`

export const PerkStyles = styled.aside`
  max-width: 275px;
  text-align: center;

  @media (min-width: 414px) {
    max-width: 325px;
  }

  @media (min-width: 768px) {
    flex: 1 1 50%;
  }

  @media (min-width: 1024px) {
    max-width: 2500px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    display: inline-block;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  }

  p {
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    width: 250px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto calc(var(--gap) / 2) auto;
    
    @media (min-width: 375px) {
      width: 200px;
    }

    @media (min-width: 1024px) {
      width: 300px;
      height: 80px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain !important;
      object-position: center;
    }
  }
`
