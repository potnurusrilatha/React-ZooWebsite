
import styles from "./mainContent.module.css"

export const MainContent = ({clickedAnimal, groupPage, animalPopUp}) => {

    const getWelcomeMessage = () => {

        if(groupPage === "Birds") {
            return `Soar high with our feathered friends! Birds of all colors and calls await you a flightless giant with a striking helmet-like casque and an important role in rainforest ecology. Laugh along with the cheerful kookaburra, whose iconic calls are the soundtrack of the Australian wilderness. Marvel at the elegant yellow-tailed black cockatoo, a stunning parrot with a graceful flight and a love for the eucalyptus forests.
            These incredible avian wonders are just the beginning of your journey into the skies. We’re thrilled to share this feathered adventure with you—let’s explore the beauty and brilliance of birds together!`
        } else if (groupPage === "Mammals") {
            return `Step into the world of mammals, where you'll find warm-blooded wonders with fur, strength, and charm.
            Whether it’s the mighty elephant or the playful monkey, each species has a unique story to tell. Discover the remarkable echidna, an egg-laying 
            mammal with spines and an incredible sense of smell.Each of these wonderful animals carries its own story and charm, waiting for you to 
            uncover. We’re thrilled to have you here—let’s explore the beauty and diversity of mammals together!`
        } else if (groupPage === "Reptiles") {
            return `Uncover the mysterious world of reptiles – cold-blooded, scaly, and often misunderstood.Dive into the oceanic wonders of the hawksbill turtle, a marine marvel with a beautifully patterned shell and vital role in maintaining coral reefs. Finally, marvel at the majestic perentie, Australia's largest monitor lizard, known for its intelligence and striking appearance.
            These incredible creatures showcase the diversity and ingenuity of the reptile world. We're delighted to have you here—let's embark on this scaly adventure together!`
        } else {
            return `Welcome to our zoo page,a virtual window into the wild! From roaring lions to slithering snakes, this zoo is home to a fascinating variety of animals. Dive into their habitats, learn fun facts, and explore the beauty of nature right from your eyes. 
            We're thrilled to have you here—let's embark on this wild journey together!`
        }
    }

    return (
        <>
            <div className={styles.mainContent}>
                {clickedAnimal 
                ?
                    <div className={styles.animalDetails}>
                        <h1>{clickedAnimal.name}</h1>
                        <div className={styles.animalDetailsContent}>
                            <img src={clickedAnimal.image} alt={clickedAnimal.name} />
                            <div className={styles.animalDetailsList}>
                                <p><span>Lifespan: </span>{clickedAnimal.lifespan}</p>
                                <p><span>Group: </span>{clickedAnimal.group}</p>
                                <p><span>Food: </span>{clickedAnimal.food}</p>
                                <p><span>Length: </span>{clickedAnimal.length}</p>
                                <p><span>Weight: </span>{clickedAnimal.weight}</p>
                                <p><span>Habitat: </span>{clickedAnimal.habitat}</p>
                            </div>
                        </div>
                        {!groupPage 
                            ? <button className={styles.readMore} onClick={animalPopUp}>Read more</button>
                            : <p className={styles.description}>{clickedAnimal.description}</p>
                        }
                    </div>
                : 
                    <div className={styles.welcome}>
                        <h1 className={styles.welcomeTitle}>Welcome to the <span>{groupPage ? groupPage : "zoo's"}</span> page!</h1>
                        <p>{getWelcomeMessage()}</p>
                    </div>
                }
            </div>
                
        </>
    )
}
