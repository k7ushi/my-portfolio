import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected for seeding'));

const seedBlogs = [
  {
    title: "Letters Without Addresses",
    summary: "Daylight breaks through the large windows and spills into the room prismatically. It's not welcoming and warm like it used to be when I...",
    content: `Daylight breaks through the large windows and spills into the room prismatically. It's not welcoming and warm like it used to be when I was a kid. Instead, it's blazing and fiery.

      The library looks the same as it did years ago. I walk through the shelves, remembering all the times my mom had scolded me if she had found me here. "Why don't you go out and play with your friends?" A tear slips down my cheek, recalling how mad she used to get.

      Going through my old books, I find one that I haven't seen here before. I don't recognize the author. The pages are ripped and torn. I go through the pages to remember how come I haven't seen this before. Strangely, I also find a letter in the middle of the pages, and it isn't addressed to anyone. I shuffle through the other pages and find many more like these. I pick one of the letters and start reading.

      Dear stranger,

        I hope through this letter, you may find the strength to go through life. Whatever difficulty you're facing, find inspiration in these powerful words. It expresses the phase of my life where I was all alone, trapped in my own mind.

      It's late at night, and I'm struggling to find the words that I wish would come easily. In truth, I'm not sure it's even possible to convey in words how much I am hurting right now. That I’m filled with guilt and shame, and I have no other option but to confide myself in these words. 

      A few months ago, my family was met in a car accident, and I lost my parents. I survived, even though the accident was caused by me. I was whining all along the ride and—

      The words are like a cold bucket of ice. It stings. It's a harsh slap. The words open the dam of tears that I have suppressed for so long. Suddenly, I'm covered, head to toe, in a crawling sensation. I can't see. I can't hear my own thoughts. I rush down the stairs and go to the nearest bathroom I find in the hallways. 

      I slam the bathroom door and start throwing up in the toilet. There's a ringing in my ears and warmth from the side of my head and bile rising from my throat because I can smell it. I can smell death. The same I did when my parents died.

      Tears streamline down my cheeks, empty stomach vomit stings my nose and burns my throat as I drag myself into the shower, clothed. 

      Shame. Guilt. Car Accident.

      The words make me gag, and more bile comes up, swirling around the drain hole. 

      "I hate myself" I keep muttering this to myself in the shower. I sit on the floor, knees to my chest, my parent's dead face clouding the forefront of my thoughts. I wish I'd never seen them dying in front of me. 

      That evening. My mother's eyes. It's always her eyes. I see it all the time. I saw them in pain, closing for the last time. The memory won't go. It's fresh. It's fresh again. Sometimes I wish I was knocked out cold then so I wouldn't have to live with these bursts of memories. 

      I try to shut my eyes tightly, but the images won't go away. I see them with my eyes closed. I see my parent's death.

      There was a hideous splotch of pale purple that marred the base of my mother's neck and the same hue of mauve on the side of my father's right wrist. It was as if death had painted them from one palette, unceasing when he got to the other part, without washing off the paint.

      The sound of shattered glass hitting the pavement and the buzzing of horns is engrained in my mind. The copper taste of my own blood was mixed in with the salt of my tears because when I opened my eyes, I saw so much red. There was red, and there was black because my mother had already started bruising. For some goddamn reason, I only had some fractured bone. 

      My eyes dart towards a razor that's on the floor next to me. I pick it up and break it, the blades fall out, and I pick one up.

      My wrist hurts a little, but it's a different kind of pain. Blood runs off, a bright red against the white tile, swirling around the drain hole. Watered-down blood reminds me of food coloring. It's prettier than straight blood, easier to look at. This is easier. It's a relief, the blood washes off under the rain of the shower, and I wait for it to wash the truth away with it. 

      Inhaling becomes frantic. Grasping for oxygen is almost impossible as I pick up a razor again and think of pressing it into my wrist. It hurts already, but it's not enough. I should dig harder. 

      I close my eyes for a minute, and I see the words of that letter in my mind. The images of my dead parents are unexpectedly filled with the words from those letters. And I want to know what that girl must have had felt. 

      I open my eyes and look at my wrist. Suddenly I don't feel so alone anymore. I don't feel anything.

      No guilt. No regret. No shame.

      Those letters. Those letters without addresses. I want to read them. I want to know that I'm not the only one feeling this. I take a deep breath, get up, and leave the bathroom, practically dragging my feet, to find some band-aids.

      I spent hours and hours reading the letters. There were so many of them, but I felt like someone understood me.

      Now standing in my balcony, I gaze out at the glittering lake, the breathtaking sky above it, and think about all the moments I spent with my parents.

      "Thank you," I whisper out the words hoping the mystery girl would hear me. I wish I could tell her how much those letters have given me hope. Those letters without any addresses have pulled me out of my grief. And I can't thank her enough for that.

      I am sad and angry with myself. But I know I couldn't have saved my parents from the accident. They believed in fate, and they have always wanted me to experience everything that I could. My parents believed in living life to the fullest. There is so much beauty in just existing. In being alive. And I don't want to miss a second.

      I still go to bed sad and wake up sad, and it still hurts like hell, but there are moments during the day when it hurts less. Sometimes I can think of my parents and not want to burst into tears. Sometimes I'm close to happy, and it doesn't even hurt much. Of course, I'll never be the way I was before, but maybe that's okay. Life goes on. I'm going on, even without them. Not every day hurts. Not every breath hurts.

      THE END`,
    author: "Khushi Anand",
    coverImage: "/letters.jpg",
    customDate: new Date("2021-05-27")
  },


  {
    title: "And The Grief Bleeds Out",
    summary: "The streets are lined with classic lamp posts and tall trees, and the front door is a short set of steps from the sidewalk. No driveway, no...",
    content: `The streets are lined with classic lamp posts and tall trees, and the front door is a short set of steps from the sidewalk. No driveway, no distance between the doorbell and the public, it would have been the perfect place to play ding dong ditch when I was a kid. The problem here is that everyone has a camera attached to the awning above the door. After unloading my bags from the car service, we head inside.

      "Okay, so the bottom floor is yours," dad says, "I'm upstairs," he gestures to the staircase by the front door.

      "Oh, right. Cool." He didn't ask me for food, and even though I'm hungry, I won't ask him either. I'm sure I won't die for not eating for a couple of hours.

      Heading downstairs, I'm frustratingly captivated with my new living arrangements. Dropping my bags on the floor, I flopped across the bed and buried my face in the soft material, wishing I could live anywhere but with him.

      It's eight at night, I get a shower, and before I get starved to death, I go upstairs.

      Dad is eating dinner with the television on. He looks surprised to see me as if he had already forgotten about my existence. "Hi, um, do you want to eat something?" He awkwardly looks at the last slice of pizza he's having. I sigh and go to the kitchen to search for dome food. There's nothing in the refrigerator. This infuriates me more than anything, and I close it with a bang. "There are some cereals in the cupboard," Dad calls out from the living room. I take a deep breath and decide to sleep instead, but not before shouting, "I don't eat cereals."

      It's close to midnight when I hear footsteps padding down the staircase, legs come into view, and I panic for a moment until I see dad. He wanders in and stands at the threshold with a paper bag forming grease stains on the bottom corner. I roll my eyes at him. So, now he has decided to bring me food. "I bought food for you, kid."

      "I don't want to eat anything. I'm sleepy," I muttered. He doesn't get the hint. "Oh, Okay. Have you already eaten?"

      "No, and I don't want to. Just go and let me sleep" I switch off the television and then start checking my phone. "Okay then!" He says after a while and leaves the food packet on the table. I let out an irritated breath and sink into the comforter and let exhaustion swallow me up.

      My thoughts are with home as I drift out. My real home, mom, the loss of control I've felt since she has gone and lost all sense of purpose. In fact, more than purpose. I've lost a sense of self.

      It's been a couple of weeks now, and my dad's behavior hasn't changed. But even when we don't communicate, he at least gives me money to buy food. Thank god, he's feeding me up, or I would have died. Well, that wouldn't be so bad either. But he at least gave me money, so I decided to order food.

      I haven't left the house even once yet. I just sit in my bed all day and binge movies. I don't know what else to do. I had always been wrapped up in my own little world with mom, and now that she's not here, I don't know what to do with my life anymore.

      Now standing in front of the mirror, I don't recognize myself. It should have been me instead of my mother. Why did she go when she was such a lively soul. She would have been enjoying life to the fullest now.

      "Hey, kiddo?" dad calls from upstairs. He always calls me kid or kiddo, never with my real name. I don't mind, though. It's cute. I shout, "Yes, what is it?" "Get ready in 15 minutes. We're going shopping, Okay?" I groan but agree to go because of not having anything better to do. I run upstairs to find him outside talking to a young man. "There she is," Dad says.

      "Kiddo, this is my assistant. We call him AP. It pretty much sums up his name also." AP smiles warmly at me, but I just nod a little and move forward. He looks like a university student to me and way too young for the job, but who knows. And while I have many questions to ask, I don't.

      We reach a shopping arcade. It's summer, so I buy some comfortable PJs and tees. While going through the dress section, I find a blue color dress that looks pretty. "Go on, try this one," Dad says from behind me. AP also roam the sections with him but doesn't talk much. I roll my eyes but smile a little. While I don't have anywhere to go to wear this dress, too, I get a little excited while trying it out.

      I shuffle through the sleeves and feel a little sensation in my left hand. I look at the hand and realize that the hand with a cast is now wrapped out in the sleeves of this dress. I feel my mood dampen, and when I look in the mirror again, I don't feel pretty anymore. I think I don't deserve to be pretty. "Kiddo? You there?" I take a deep breath and go out.

      "Oh, my darling. You look so beautiful in that dress." He looks awestruck.

      "Thank you," I respond politely. Dad watches me, his glassed-over gaze piercing me between slow blinks like I'm a familiar stranger he can't quite recall how he knows.

      "You look like your mom," he mumbles, shaking off his trance. "I remember how beautiful she was the same age, you are now." My mood does a full 180, and I feel my face getting hot. I go inside and change the dress hurriedly. Then I sprint past my dad and AP to the exit.

      I don't look at my dad. How dare he bring my mother's topic so casually. He's didn't even know her.  What does he think of himself? I don't want to see his face.

      Not knowing where to go, I stop for a little while outside. "What is your problem?" His voice booms. I see my dad looking out of breath with AP in line with shopping bags. Still not in any mood to deal with my dad, I stare at AP and say, "Take me home, AP." It's the first time I've spoken to him, so he looks startled.

      "Actually," dad says as the car service pulls up to the curb. "Now that I have the afternoon free, I will work on some scripts, and I'll need my assistant. Get in, and I'll drop you at home first."

      He opens the car door, but I stay put. "No, AP can drop me at home. I don't want to go with you."

      "He's my assistant, kid. He's not obliged to take orders from you. Plus, not everything is about you." Although I'm not sure why, hearing him say that, hurts.

      "Whatever," I don't look at AP because I can feel the apologetic tension radiating from him. Instead of getting in the car, I walk off down the road.

      "We're in the middle of a road, kid," dad calls. "Get in the car."

      "I'll get a taxi." I start looking for rentals on my phone. I think that's the end of it, but I register the footsteps running after me just a moment too late, and then I'm hoisted over someone's shoulder.

      "You are such a stubborn little shit sometimes," dad carries me back to the car. "Why does everything have to escalate so quickly with you? I'm not leaving my daughter alone."

      I struggle, kicking and hitting as he puts me down and pushes me to the back seat. "Hello, is no one concerned that I'm being kidnapped!"

      People walking down the sidewalk ignore the struggle, and I'm in genuine shock at the 'none of my business' vibes coming from each and every one of them.

      "Give it a rest," dad sighs and slams the door once I'm in the car. He gets on the other side, and AP sits in the front. "I hate you," I snap, feeling hot with frustration.

      "It's a good thing I've never really cared whether I'm hated or not then, isn't it," dad says, focused on his phone. Even with a flippant tone, I can hear the edge of hurt, and underneath the anger, I feel guilt.

      I have heard noises from upstairs. It seems like dad's busy with the production team. Dad and I haven't spoken since that day after I got mad at him for bringing up mom. He came downstairs in ten minutes intervals, stuck his head in the door, saw me watching a movie, and then went upstairs again.

      Eventually, he asked if I wanted food or water. The answer was no, but not because I was mad at him, because I was mad at me.

      Constantly lashing out at people is exhausting. And I know he didn't do anything intentionally. I'm just very wound up from the inside, and I need to clear my head. There's too much stuff in here. I feel like I can't even communicate without replaying the conversations a hundred times in my mind.

      I have been just sleeping or watching movies all day. I feel like I don't know a thing about this world. Finally, I decided to head upstairs to eat cereals that I've been eating for the past few days.

      Walking in the kitchen, I see the team working dedicatedly. Most of them are in casual attire and are working on their computers or going through some documents. It looks so lively here, and I kind of find it very fascinating that all these things will come together to form a movie. All these people love being a part of something big. I can tell this just by looking at their faces. The excitement combines the creativity and originality of the theme, genre, narrative structure, character portrayal, directing, cinematography, editing, and many more things.

      Sipping through a coffee, I search for my dad and find him discussing some documents with a lady. I walk over to him and lean forward to see him working on some dialogues. He catches me staring and smiles reluctantly. I smile back. He beams and goes back to work.

      After a moment, I realize my dad's movie isn't scoring like it used to before. I may not know him personally before, but I have always known him as one of the directors in the industry, just like I have known others. Though I never wanted him to be my dad, my mother once told me that he was my father who had decided to leave me when I was three years old to pursue his film career. I was okay with the fact because it didn't make a difference to me. My reaction caught my mother off guard. I guess she wanted me to throw some tantrum or something. Ha! Never been that kid mother.

      I told her she's my entire world, and it doesn't make a difference if I have a dad or not. I had my mother, and it was enough. I was happy in my little world with her. Though my world is shattered now, and I'm left to live with a stranger who doesn't even want me in the first place.

      Suddenly feeling claustrophobic in this house, I feel the need to go out. It's a windy day in town. As I step outside, I feel a sudden jolt of cold hair. I should have brought a jacket or something. I hug my body a little and start walking down the street.

      I tell myself I am searching for something. But more and more, it feels like I am wandering, waiting for something to happen to me, something that will change everything, something that my whole life has been leading up to."

      The place is beautiful. I realize I haven't been out once. What am I even doing with my life? What am I even going to do in the future? Just thinking about my future starts giving me anxiety.

      If my present is not sorted out, how am I supposed to plan my future? Growing up, I always felt like I knew what to do. I had dreams that needed to be chased. Dreams that seem irrelevant to me now.

      I don't even know my dad very well, but I can always live with him and do the house chores, or maybe get a job in a bookstore. Though I am sure he won't allow me, it will be a huge blow to his ego. But what about when he dies? He has a shit ton of money. I can survive my life living in a one-room department, but that seems very…boring.

      I don't even have a hobby now. My old hobbies don't make sense to me now. It feels like a lifetime ago when I used to do so many things with my mom. But now that I don't have her, I realize I don't like them anymore. Maybe I never liked doing them. I just liked my time with my mother cause it meant we were enjoying our time, creating memories.

      I didn't realize the time, but suddenly it was dark. Shuffling through my pockets, I find I don't have my phone with me. Ugh! Great!

      "You know, it's not safe to walk down the streets, alone, at night." I startle and find AP next to me. Now that we're standing, he's taller than I realized, a head and a half above my five foot five inches. "What the hell, dude?" I urge the tightening in my chest to release. "Are you following me?"

      "Nope," he laughs. "Saw you were walking down the streets alone from my window, so decided to accompany you. You lost?" He studies me for a while, when I don't answer. "Come on. I'll walk you back to your house." He says, "Thanks," I mutter.

      We started walking down to a completely different street from where I was heading. "So, how're your days going?" Ugh, I was dreading this only. My heading's too cloud up to think of anything, so I just say, "good."

      "Hmm. It doesn't seem like it, though" I shoot him a glare, and he puts his hand in the air, "kidding, you seem to be having fun. So much fun."

      "Whatever" I roll my eyes and start walking ahead even though I don't know the direction. "Um, turn right side now," He says from behind and then catches up to me. We take the turn, and I can already see my house at the far end.

      "Um, I heard about your mother, and I want you to know I'm sorry." I stop to take some deep breaths. I don't want to blow up at him when he's so kind and generous to me. "Thank you," I reply sincerely. "Yeah, and I also wanted to let you know that it wasn't your fault. Okay? You don't have to feel guilty for that." I nod again, hoping he'll stop now. He doesn't. "My parents also died when I was young I understand-"

      "Stop. Just stop talking. Don't compare our situations. Okay? I don't want your sympathy. I am not interested in talking to you." Saying this, I take a run for my house.

      I feel furious. AP doesn't know anything about me. He didn't know her. He doesn't know she didn't deserve this. He doesn't know anything. Nobody does. Mom died because of me. I did this to her. Her own daughter.

      I enter the house out of breath and close the door with a loud bang. I don't care if people are still over. I don't care about anything. I go to my room and climb into my bed. Finally, the tears start coming, and I welcome them because I deserve this. I deserve tears. I deserve pain. But she didn't. Mom dedicated her whole life to me, gave me the world cause she thought I deserved that, but I don't. I don't deserve to live, and she didn't deserve to die.

      There was a hideous splotch of pale purple that marred the base of my mom's neck and the same hue of mauve on the side of her right wrist. It was as if death had painted her from one palette, unceasing when he got to the other part, without washing off the paint.

      I try to shut my eyes tightly, but the images won't go away. I see her with my eyes closed. I see her death. I try to sleep. Hoping death would engulf me.

      "You've got some nerve."

      I roll over in bed, squint through one eye and find dad next to me. He rips the comforter off me and starts to shout. "Not even a text to let me know where you are."

      My heart is pounding while I try to pull the comforter back, "Where were you?" He asks again.

      "I went outside for a walk then got lost" He stares at me while I huddle back under the comforter. "You walked home alone?"

      "No, AP walked me home." I cough a little. "Why does it matter?"

      He palms his jaw and paces beside the bed. "It matters because I didn't know where you were, and you couldn't send me one single text message to let me know. Rude, kiddo. Rude."

      "Whatever." I roll my eyes. He stops, and the outrage is so comical I could laugh. "Excuse me?"

      I mutter, "Don’t like you care about me."

      "First of all, I do care about you. You're my daughter. Second of all, you didn't inform me you were out for a walk. If you could just text me, I wouldn't be worried about you getting in some accident."

      The word is like a cold bucket of ice. It stings, it's a harsh slap, and I see red as I stand up and fling the comforter back. Suddenly, I'm covered, head to toe, in a crawling sensation. I can't see. I can't hear my own thoughts. "Get out."

      Dad watches me barge past him, heading for the shower. His jaw is on the floor, but I'm too sick to stop and acknowledge the hurt on his face. I slam the bathroom door, turn on the shower, and throw up in the toilet as quietly as I can.

      "Hey," he pounds on the door. "What the hell? What did I do?"

      Tears streamline down my cheeks, empty stomach vomit stings my nose and burns my throat as I drag myself into the shower, clothed. Dad continues banging, demanding to know what he could've possibly done to upset me so much.

      "Leave me alone," I scream. There's a ringing in my ears and warmth from the side of my head and bile rising from my throat because I can smell it. I can smell death. The same I did when my mother died.

      Accident. Car Accident. Accident

      The word makes me gag, and more bile comes up, swirling around the drain hole.

      The sound of shattered glass hitting the pavement and the buzzing of horns is engrained in my mind. The copper taste of my own blood was mixed in with the salt of my tears because when I opened my eyes, I saw so much red. There was red, and there was black because my mother had already started bruising. For some goddamn reason, I only had one fractured bone.

      "I hate myself" I keep muttering this to myself in the shower. I sit on the floor, knees to my chest, mom's dead face clouding the forefront of my thoughts. I wish I'd never seen her dying in front of me.

      That evening, her eyes. It's always her eyes. I see it all the time. I saw them in pain, closing for the last time. The memory won't go. It's fresh. It's fresh again.

      Sometimes I wish I was knocked out cold then so I wouldn't have to live with these bursts of memories.

      The razor I shave my legs with is on the floor next to me. I pick it up and break it, the blades fall out, and I pick one up.

      My wrist hurts, but it's a different kind of pain. Blood runs off, a bright red against the white tile, swirling around the drain hole. Watered-down blood reminds me of food coloring. It's prettier than straight blood, easier to look at. This is easier.

      Inhaling becomes frantic; grasping for oxygen is almost impossible as I pick up a razor again and try to press it into my wrist. It hurts, it's a relief, the blood washes off under the rain of the shower, and I wait for it to wash the truth away with it. I close my eyes.

      "Kiddo," dad is right in front of me, and I see tears on his cheeks. "What are you doing?" Suddenly, I'm looking at the ceiling, and I'm floating through the air, Dad's face above me. We get to my room, and he puts me on the bed, sniffing and sobbing. "Awh," I palm his cheeks. "Don't cry, daddy. Don't be sad. I'll be sad."

      He takes my hand and shuffles through some band-aids or something to stop the blood flow. I look at the blood drops. I guess I didn't dig harder to kill myself. "Honey," Dad sobs. "Why would you hurt yourself like this? Please, please tell me what's wrong."

      "I'm not hurting, I feel, I can't feel my body. It's so nice." I look at the ceilings. He doesn't say anything for a while and takes deep breaths.

      "I hate me, you know. I think I should just die until I bleed out. I'm sick of it. It should have been me instead of mom. I can't live like this, dad. I can't."

      Arms wrap around me from behind, and my face is wet, and I struggle because I want to lie face down in a bath with my wrists open because I'm done hurting.

      "Let me go," I scream into the pillow, pulling away. "I'm done. I want to be done. "He murmurs. "No, kiddo, I love you." No, please, let me go. I allow the darkness to welcome me.

      Daylight breaks in through the curtains, spiling into my room prismatically, just like last night's shards of the shattered blade, and seeps into my skin like prickly thorns. It's not welcoming and warm. Instead, it's blazing and fiery.

      Last night is a blur. When I peer through half-closed lids, dad is asleep next to me. I'm too ashamed to look at my dad, so I pretend to sleep.

      "Get dressed. We're going somewhere." He murmurs.

      "What?" He stands up. Fatigue is written all over him. "It's time we talk, kiddo. Be upstairs in 15." Dad doesn't say more, he leaves the room, practically dragging his feet, and I'm alone again. Whatever his plan is, I don't have the energy to argue with him. I look at my wrist, wrapped up in messy band-aids. I sigh and fix it.

      Upstairs, dad is dressed up and busy with his phone, tapping on the screen and not acknowledging my presence. Images of his sobbing face came flooding in, and it's like a tidal wave of emotion, threatening to knock me over. Dad cried for me. Dad never cries.

      "Car's here," he looks at me. "Come on."

      The car ride is silent. Dad turns into a small sandy road, and I have no idea where we are. I look out the windows, confused. Where's he taking me?

      After a few minutes of silent driving, he says, "Okay! Here we are!"

      I open my door as well and look around, still unsure of where we're. A big hill surrounds us, with trees in every view. The ground is rock and sand.

      "Where are we?" I ask, totally oblivious to what is going on.

      "Kiddo, come around this side of the car." I walk around the front to where dad is standing and see it. The big Hollywood sign is on top of us, up the hill. My mouth drops as I take in the amazing sight. I always knew about it but experiencing it is a totally different thing. The sun is up halfway up the hill, and it makes the hill look beautiful. "Come on," Dad smiles a little and gestures me to follow him.

      We walk up the hill, along the sandy drive, as there is no footpath. I am not sure what to make conversation about, so I start with, "Why did you bring me here?" I can tell his face has softened into a smile beside me.

      "I'm not sure why. I always come here. It used to be your mom's favourite spot." I feel my chest tightening a little but smile up at him.

      Before I know it, we are at the top. The sign is to our left. We sit down side by side. I take a moment to look around me and see where I am and how far I have come. The car we had driven here in was just a small object below us.

      The Hollywood sign, I find so mesmerizing. This is where the best films are made that captivate the audience. It connects with people on a personal level. I take a look at my dad and wonder how many films he had made that associated with people. How he even got the inspiration.

      "What do you think?" he asks. "It's perfect. This is perfect." I smile, still fazed by the beauty.

      "I know. Not many people come up here anymore, which is a shame with a view like this." The conversation fades, and we spend the rest of the hour in silence, an uncomfortable one on my part.

      Waiting for him to bring up the cutting is torture of its own form. A thousand different conversations run through my mind, potential excuses, justifications, lies.

      "Let me tell you something," dad suddenly breaks the silence, his voice has an edge to it, and there's a shimmer lining the rim of his eye. "One of the worst moments of my life was the night I moved out. You screamed and cried and begged me not to go. You wrapped yourself around my leg, and I had to pull you off and listen to your little voice, pleading with me not to leave you." His chin is quivering now, and I can feel the sting of my own tears.

      "I didn't think that sort of pain could be topped," he sucks in a sharp breath. "Until last night. When I saw you cutting your wrist, when I had to listen to you begging me to let you go, I can't even describe that pain. That really tore my chest open, kid."

      A tear slips down my cheek. "I don't really want to…die," I murmur because it's true, I don't. Last night, I did, but I'm glad dad was there because I don't really want to end my life. I just want to end the hurt. I don't want to keep feeling pain every time I think about my mom. It should've been me instead of mom. I know deep within my heart she died because of me.

      "I don't know what to do," he throws his arms wide. "I don't know what to do. Really. I'm not qualified to deal with this. I've been a shit dad. Hell,  technically, I have never been a dad. What right do I have to tell you that you can trust me? You probably feel like you can't trust me. This is something a mother would deal with. But she's not here. How am I supposed to help you kid when you wouldn't open up?" I don't know what to tell him. He wants to know what I need from him, but I don't know what I need. I don't know what I want. I don't know how to stop having these painful flashbacks and moments of utter weakness that push me into self-mutilation. I don't have a clue where the answers are either.

      "I want to help. I want to do the right thing for you. I left you and your mom because I wanted to chase my dreams and she wasn't willing to come half way through the world with me. We mutually decided to part ways. But I still wonder what would have happened if she had come with me. I miss her all the time. Though the memories we made were enough for me. I wanted to meet you also kid, however, I just kept on delaying it. But here, we are now. My wife is dead, my daughter is hurting, and I have no clue about what to do. I'm stuck, kiddo. I want to help. I want to make it better. How can I make it better? Please tell me."

      I'm a mess, and now he is too. He's crying, and it's a pain no blade could come close to matching. "I don't want my little girl to hurt anymore," he wipes his face. "Tell me how to help."

      I can't even look at him, but the sincerity in his voice breaks the dam, and I burst into tears. "I don't know, dad. I don't know anything. All I know is I see her dead face every time I close my eyes. She never wanted to die so young, you know. I feel guilty. She died because of me, right? Tell me. Please." My voice gives out, "I just miss her, dad." He catches me before I fall, and he sinks to the ground with me, his arms encasing me while he also cries.

      "No baby, it wasn't your fault. Okay? We'll figure this out." he murmurs. His hold is tight enough that I have a little bit of hope I won't fall apart more than I already have.

      "Dad, it hurts." I don't even recognize my own voice.

      "I know," he kisses my head. Dad rocks us back and forth, right there on the grassy ground, and I let him hold me because I've been holding myself for so long, and I can't do it alone anymore.

      And the grief bleeds out. The longer he tells me he's here, the tighter he holds me, the more I cry, the lighter I begin to feel. "I'm here, kiddo. I've got you."

      Few months later

      "Dad!" He takes a look at me but doesn't respond. "Let's go home, please." He nods a little but keeps on talking to the bald man. Ugh, this is so boring. I take a look at the surrounding.

      The last few weeks have been weird. I'm feeling good, dad hasn't been at work much, but the crew sometimes comes home. Though, mostly it's just dad and me. All we've done is hung around the house, watch movies, eaten food, and skirted around certain topics. Oh, and of course, he has been telling me things about films. I find scripts the most fascinating.

      "Not liking the event much?" A woman next to me asks. I shake my head politely at her and start picking the sleeve of my blue dress. The entire two hours I spent doing my hair, make-up, and getting ready for the event, dad lay on my bed, already in a suit, talking about this, that, and the next thing. I don't mind his weird babbling so much.

      "You're his daughter, right?" She asks again, gesturing to dad. This time I reply, "Yes, miss. Dad wouldn't come for the event, but I pestered him to, and now I'm regretting." I sigh.

      The lady nods a little, she doesn't ask about mom, but I'll openly speak about mom if she does. My therapist says my PTSD is getting better. "You enjoy your time with him?" She asks again, and I nod. "Hmm! That's good. Girls need their dads. It's a true thing. Girl not having her daddy can give her all sorts of problems."

      "Really?" I ask.

      "Oh, for sure. No self-esteem, looking for love in the arms of men who don't treat her right because her daddy never set the right example. You know, even subconsciously, a girl will end up with a man who mirrors her daddy. She grows up watching how he treats her momma, and that's the standard. Even when Jamal and I split up, I said to him, our little girl needs to see her daddy as a hero, even in divorce. I told him to be that hero for her. He did, and our baby girl married a fine man."

      I sneak a look at dad and see the distance in his stare like he's plagued with thoughts, and I wonder how my life would have been dad had not been with me?

      The car ride is silent except for dad reminding me to meet him exactly after 15 minutes in the kitchen.

      "You're two minutes late" That's what he says as soon as I enter. It irritates me so much that he keeps track of every second. "Sorry, dad." I smile at him innocently. He shakes his head, "Where were we?"

      "They were trying to cross the frozen lake," I say immediately. "And Marjorie was telling everyone about frostbite prevention."

      "Oh, was she?" Dad asks, but I can hear the laughter in his voice.

      "Okay. So they're about to cross the lake..." He pauses, and I wait, knowing that any minute now, he'd suggest a possibility, and we'd go from there.

      "Oh, right. Well, I think she would also try to warn them about Karl. It makes sense for the story." And the next minute, the doorbell rang.

      "It's food. I'll get it." Dad goes for it, and I begin working on the scripts. Helping my dad with his films has been the best decision I've ever made.

      After 10 minutes, I stop to check on him. What in the world he's doing now? Talking to a delivery guy.

      As I go outside, I see dad talking to AP. Of course, he brought up the food. He notices me instantly and smiles like usual. Dimples pierce his cheeks. And, this time, I smile back at him, not forcibly but wholeheartedly. He stares for a moment and then goes back to talking with dad.

      I lean on the doorframe, and then my eyes find my wrist. The cuts are healing, I no longer need the band-aids, but they're still red and visible.

      I wonder what would've happened if dad hadn't saved me. I look at him. and my chest tightens at the sight of my dad, and before I know it, there's a sting of tears welling. An emotion far greater than I'd been prepared for. I wish mom would've been here to see this, but now, I'm sure she's happy out there. She's happy to see me with my dad.

      My dad. I love my dad, and not just as a human being. I love him as a parent also. I knew he wouldn't waste the second chance he's got with me. The man who has pulled me through the darkest moments of my life would give me what he'd failed to all those years ago, the world.

      This time he'd give me the world because he knows that's what I deserve. He believes that. Mom did too. And now I've also started believing that.

      THE END`,
    author: "Khushi Anand",
    coverImage: "/grief.jpg",
    customDate: new Date("2021-07-14")
  },

  {
    title: "Being Alive",
    summary: "You still haven't told me what made you move down here from British Columbia Lexi's panting voice said from behind, 'Grayson, I told...",
    content: `Nashville, Tennessee

      "You still haven't told me what made you move down here from British Columbia?"

      Lexi's panting voice said from behind, "Grayson, I told you about my mother a few days ago. How can you forget that?" Oh, I remember her telling me that her mother left her and her dad a year ago. Lexi was never close to her mother so, she got over her quickly, but her father was shattered. Despite her mother's irrational behavior, he loved her, and after a point of time, he decided to move states.

      "Gray! Gray! Come here! There's so much water here!" Lexi's high-pitched voice startled me. I ran towards her and saw a fresh river stream in between these woods. "You silly girl, this is called a small stream, not so much water!"

      "Don't act like you know everything. You are just an eight-year-old boy!" Lexi rebukes. My god, she gets worked up so easily.

      "I know, but I am still two years older than you." I tease her a bit more. She ponders over this for a while, and I wonder what her little brain is thinking. "Then you can be my best friend and teach me everything. Will you be my best friend?"

      Well, I have never befriended a girl earlier, but when I see her bright smile fading a little bit, I take her hand and run towards the stream. "Yes, Lexi, we are best friends, and this is our spot now, the sky, the woods, the stream, everything is ours!"

      Lexi is laughing so hard as we run near the stream, "Okay, Gray, leave my hand now." I instantly leave, and she goes running in the stream, "Come on, Gray, let's play in the water."

      "No! Don't even think about it, if you spoiled your dress, your dad would scold us" And just like that, I ran towards my new best friend.

      Nine years later

      "It is all your fault, Gray!" Lexi's tugged the hand she had a death grip on. "No! You knew that he was the one who put those gums in your hair a week ago, and you wanted me to walk away from him? Without a damn fight? Are you kidding me, Lexi?" I am mad right now, and she is pissing me off more. "Okay, chill-relax, Grayson! You broke his nose, leave him now and show me your hand!"

      My knuckles are bruised, and as usual, Lexi is fixing them. She is rambling about something, but I am not paying attention. I don't know why Lexi is always so insecure about herself. Although she is perfect in everything, she always pushes herself hard, yet she lets people walk over her like a doormat, I know Lexi doesn't like making a big fuss about anything, but she should stand up for herself.

      Even when I lecture her, she says, "I don't care about what they do, okay? So let them say whatever they want. But you? You are my best friend, Grayson, and I love you, so stop getting in all these fights for me, please?" And there, just like that, my heart melts.

      Nevertheless, I am standing right beside her. No matter what anyone says. She knows I could set the universe on fire, and she'd still be by my side cause not a spark would touch her skin when I am with her.

      "Uh, hello?" Lexi's sweet voice startled me from my thoughts. "Gray, did you not listen to anything I said?" I look at my right hand; my knuckles are all taped up.

      "Huh?" I croaked. "God Grayson Williams, I don't know what to do with you? Fine, tell me you will come to streams right after school, I have so much to tell you, and I have to show you my manuscripts. Hopefully, I get selected as one of our school newsletter's columnists! I wrote something for you too, and you will love it, I know!"

      "Ugh, Lexi, why are you so hyperactive today?" She's such a loud person. I don't think she should be considered an introvert.

      "Because I know you will love what I have written for you, it's a poem and a big letter. I was up the whole night yesterday." "No! Oh My God, I forgot you have football practice today. Leave it then. I will figure it out myself!"

      "Lexi-Lexi-Lexi, you know I can always make time for you. Besides, my practice is for two hours only, so that I will come by streams later in the afternoon, and we will figure out your essays. But hey, why don't you give me the letter and the poem now?" I know this girl. If she were up the whole night for this, she wouldn't give it to me so quickly. She always does this. Now I will think about it the entire day.

      "Nope, you won't get it unless you come to the streams. The letter and poem are kinds of special. I want to look at you when you read them." And there she was, out of the locker room, leaving me dazed.

      Five hours later

      Shit! Shit! Shit! Ugh, the coach kept us back for four or more hours for our next game's training. I couldn't even call Lexi in between. It's evening now, and it's windy out here. I am damn sure Lexi will chew me out today.

      As I reached the stream breathless after running through the woods, Lexi was nowhere to be found. Shit, it's getting dark. She must have left for home. I checked my phone, and there were no texts or calls from her. She must be super mad then. I will buy her favorite brownies tomorrow and apologize sincerely. Lexi doesn't know what she means to me.

      "Hey, Mom!" "Dad," I yelled as soon as I arrived home. My mom and dad must have heard from her father how upset she is. And I know my mom. She will tell me how bad I am for not informing Lexi that I will be late. Dad will probably lecture me for letting Lexi walk home alone in this weather.

      Only none of the above things happened when I saw my mom because she was sobbing, sitting on the couch with dad, nowhere to be found.

      "Mom! What happened?" "Are you okay?" Mom didn't hear me or chose to ignore me. "Mom, where is dad?" "Tell me what happened?" Then she noticed me through her red, puffy eyes and stained checks and hugged me tightly. How long has she been crying for?

      I crouched beside her, panicked, worried, and impatiently waiting for her to stop sobbing. Finally, after some minutes, she said, "Grayson, I am so sorry! Your Dad is at Lexi's. She is gone, Grayson. Lexi is gone. I am sorry, son." As soon as she said those, my whole world collapsed.

      I couldn't think of anything. Everything felt like a blur. Mom explains things to me in bits and pieces, sobbing and crying, trying to form words. Except I can't process anything she's saying, it's like my mind isn't working. Finally, I ran out of the house and towards my jeep, leaving my crying mess of a mother on the cold hard floor. I know I should've been holding her right now. Lexi is like a daughter to her. But it's like my body isn't connected to my mind anymore. I can't think of anything except Lexi.

      Composing myself after few short minutes, I reach her house. It's heavy raining by this time. It feels like the sky is crying over our misery. It's like Lexi is bidding us goodbye, and the signal of her farewell rings in the night sky.

      Maybe I already knew what I would find here, but I didn't want to believe it. Paramedics and cops surrounded her home. The porch was surrounded by neighbors and cops, questioning and examining what had happened.

      I don't know what I expected to see here, but this wasn't the one, for sure! My thoughts were a mess as I noticed the ambulance in the driveway, and I took the slow dreading steps towards it and stopped. I feel like I can't breathe. I can't see through the ambulance doors, but I know she's inside.

      And the next moment, I am rushing towards her. Yet I can't reach her. There's suddenly a door in front of me. And it's locked. I am hitting the door as hard as I can. I know Lexi needs me, and I can't get out of here. My hands are trembling, but I am not giving up.

      And then someone else is there, saying something, but I am not listening. Lexi needs me. I am coming-

      "Sir" "Sir Please" "Sir, move aside."

      I blink, and the vision is gone. My hands are on the ambulance's door handle, and I am jigging it frantically. I want to see through the window. I want to look at Lexi one last time. But as knowing her dead face will remain imprinted in my vision for my whole life, I stumble behind. The officers are trying to steady me, and I let them.

      I drop to my knees, feeling weak. Hot tears prick behind my eyes like tiny searing needles. I bow my head down and try to hold my pride in masculinity a little longer. What would Lexi have thought about me? The idea overwhelms my body and soul much deeper. And the tears form thick in my throat until I can't hold them in anymore. The sobs that have been building in my chest burst out, ragged and painful. It's coming down hard enough that I couldn't pretend that it was only the rain hitting me and not the fact that I'd lost my best friend.

      My thoughts are floating. It's like being dragged into the sea, the waves are crashing around me, and I'm struggling to breathe. I sink into the depths, and I want to submit to the building pressure. But I don't want this to be true. I want to disappear into the dark void. I would so easily drown with Lexi. My life is shattered now, and I don't know if I'll be able to glue the pieces back together and make it whole again one day.

      As the rain falls slower, everything starts to feel a little normal now. My breathing is coming a little easier, my voice a little steadier. The hysterical feeling fades and leaves me with the all too sharp awareness of harsh reality. Lexi was gone from our lives permanently.

      Looking over the porch, Lexi's dad sits on the steps, silently crying and weeping, with my dad giving him support. I can't imagine what Lexi's dad must have been going through. His wife left him and never returned. Nobody expected her to. Because people like that. People who don't want to be found? They're usually really good at staying lost.

      One month later

      It doesn't feel real, it's been only four weeks since Lexi's death, but I still don't know how to think of it. Everything has changed, or maybe nothing has changed. Her father is a total mess, but I know he is trying. He is trying to get his life together for his dead daughter, just like me. Lexi is gone from our lives, and it's tough to wrap my mind around this.

      I went to her bedroom the day of her funeral, searching for her letter and poem that she wrote for me. Lexi's room was the same as we decorated a while ago. The walls are layered ceiling-to-floor in posters of old rock stars and punk bands, with a few jazz artists thrown in for good measure, signed flyers from local shows, and newspaper clippings from various protests. My Lexi loved old music. I searched everywhere for those but never found them.

      Lexi was waiting for me near the stream in the afternoon, and she never went home. As the weather was terrible, her writing manuscripts must have fled here and there, and while running, she fell in the stream. She had a broken ankle and four broken ribs, and she couldn't swim to the shore.

      Damn that wind for blowing her pages. Damn me for not saving her when she was drowning. And damn Lexi for leaving me alone in this world. I'll never know what she was thinking while taking her last breathes. I will never know what she wrote for me. They are also gone, just like her. I couldn't tell her how sorry I was for being late that evening and how much I had loved her from the moment she came into my life.

      I remember the time we went to a movie and were about to get caught for stealing.

      Lexi and I had only seen a handful of movies together so far, but we already worked out our routine, snack-wise. She was more of sour gummy candies, the M&M's, and Twizzlers kind of girl. Whereas if you simply give me a large buttered & salted popcorn and one diet coke, I'll be pleased.

      As I was about to ask Lexi whether she wanted drinks or not, she grabbed my arm and pointed to a sign resting on one of the shelves and half tucked behind a display of Drive-In T-shirts and mugs. "Look."

      It was a small sign, the kind you put magnetized letters on, the kind I associated with bowling alley snack menus. It had a very cool, vintage look to it, but instead of telling you how much the fries were, read-

      LEXI LOVES PEPSI

      I snorted and looked at her, "Do you want it?" She smirked, and I knew that we were going to take it towards the end of the movie.

      Throughout the movie, we were more interested in making a plan. We had a lot of discussions and arguments about how to take it without being noticed. I even offered to purchase it from the workers, except the area where the sign was placed made it clear it wasn't up for sale. At one point, the other individuals told us to keep our volumes down because of the avid exchanges Lexi and I were having. Although towards the end of the movie, we had a solid plan.

      Twenty minutes left for the movie. We move towards the snack counter. Lexi went to buy some more snacks, and I went towards the two guards roaming near the sign.

      "Hey, man!" "Listen," I asked frantically.

      "Is there any problem?" the bulky-looking guard said, and the other scrawny one, alerted, was making his way towards us.

      "Guys, a shaggy man in his forties is lying on the floor, shaking and sweating, in the men's washroom. I tried to stabilize him, but it looks like he's high and on the verge of death." It was the most reasonable excuse Lexi, and I thought that would give us some time. And no doubt, both of them panicked ran towards the washroom.

      Standing on my tiptoes, I took the sign. It was hell lot large and heavy than I imagined. However, looking at it, the smile automatically came onto my face. Sighing, I grumbled in my breath, "Things we do for our best friends."

      "Hey Gray, are you done?" Lexi came just in time with a huge bag filled with snacks. "Damn it, how much did you buy?" We put the sign in the bag. It was slightly peaking out, though it won't get noticed.

      "Everything almost and put twenty bucks in the donations box. Now hurry up! Let's go!" My sweet Lexi, always with a kind heart.

      And we made our towards the exit. It was kind of hard to avoid the guards near the entrance. They were suspicious. Nevertheless, we talked our way out of it as we exited the mall and walked towards the road for a minute.

      But then Lexi and I looked at each other, then at the bag full of snacks where a certain signboard with certain someone's name was peaking out, and we laughed. And couldn't stop. There was nothing to laugh about but everything to laugh at. So accordingly, we stole something that belonged to the store, and here in the middle of a road, we were laughing like maniacs.

      This was the friendship Lexi and I shared. From partners in crime to being each other cry buddies, we were everything in between.

      I gaze out at the glittering stream, the breathtaking sky above it, and think about all the moments I spent with Lexi.

      "Lexi," I whisper out her name like she is the daily dose of oxygen I need for breathing.

      She was there for me always. I am sad and angry with myself. I could've saved her from drowning. Although nobody knew Lexi more than me, and I know she wouldn't want me to mull over this. If there is one thing Lexi believed more than anything is living. There is so much beauty in just existing. In being alive. And I don't want to miss a second.

      I still go to bed sad and wake up sad, and it still hurts like hell, but there are moments during the day when it hurts less. Sometimes I can think of Lexi and not want to burst into tears or put my fist through a wall. Sometimes I'm close to happy, and it doesn't even hurt much. Of course, I'll never be the way I was before, but maybe that's okay. Life goes on. I'm going on, even without her. Not every day hurts. Not every breath hurts.

      THE END`,
    author: "Khushi Anand",
    coverImage: "/alive.jpg",
    customDate: new Date("2021-10-03")
  },

  {
    title: "Love Finds You",
    summary: "'Could you please hurry?' I said to the cabbie. 'Sorry ma'am, the road is completely blocked. I can't do anything. We have to wait.' I sighed...",
    content: `"Could you please hurry?" I said to the cabbie. "Sorry ma'am, the road is completely blocked. I can't do anything. We have to wait." I sighed. There was nothing else I could do. I guess the meeting would just have to be rescheduled. I should text my PA regarding this. 

      Looking out the window, I notice a girl whining to her mom about something. As the little girl is about to cry, the father gives her a package, and she instantly hugs her father, while the mother shakes her head a little bit but smiles nonetheless.

      "Ma'am, do you mind if I turn on the radio?" The cabbie asks, "No, I don't mind." He sets a medium, and a familiar song starts playing. A smile automatically comes up on my face as I recognize the lyrics. 

      Tu me suis tu me souris dans la nuit tu me seduis
      Je sais que tu sais que je ne sais plus qui je suis

      I again look out of the window to that happy family and remember how once upon a time I also wanted that. How being in love was the only thing I ever wanted.

      I run out of the cafeteria as fast as I can. No, I don't think I can handle this. This was a mistake. My tears won't stop. I need to get out of here. I didn't realize where I was going. And I bump into someone. "Woah!" He grunts. "Sorry," I mumble, looking down. 

      "Hey! Where are you running to, cinderella?" He laughs. I ignore and try going past him, but he won't let me. 

      I look up at him, and he looks surprised. "Why are you crying!" 

      "Shit … um, I'm gonna go." I try running past him this time, but he won't let me again.

      "What's it? Do you wanna talk about it?" He looks genuinely concerned, but I don't know how to respond to that. "No, it's fine!" Though he won't budge, "No, let's get out of here. Come on!" He takes my hand and leads me to the back entrance.

      We sit in silence for a moment, but now I can't take it anymore, and I burst into tears. I can't take this anymore. 

      "Hey! I'm here. You can talk to me about it." He is so concerned for someone he doesn't even know. Though I've never been one to vocalize my emotions, that was for a reason. I've never been good at speaking about how I felt, so I just cry about it. It's easier this way. "I can't!" My voice chokes up a bit.

      "Come on. Try me." He is just so persistent. I sniff, "There's this guy. I kind of liked him. And I thought he did too." I look at him to catch the judgment in his eyes, but there aren't any. He nods for me to go on. "But then, he … um, asked another girl out for a date. And when I confronted him about this, he blew me off. He told me how I could even think of it. And, and-" I feel hot tears prick behind my eyes like tiny searing needles.

      The tears form thick in my throat until I can't hold them in anymore. The sobs that have been building in my chest burst out, ragged and painful. It's coming down hard enough that I couldn't pretend that it was only some boy rejecting me and not the fact that I'd again lost my chance at love.

      "Hey, it's his loss, okay? You don't have to feel bad about it." He's trying to comfort me, but he doesn't know. It is a lot more than just a boy replacing me with someone else, and it's his words. Something that remains imprinted in my mind for days.

      Words, I think, are such unpredictable creatures. No gun, no sword, no army or king will ever be more powerful than a sentence. Swords may cut and kill, but words will stab and stay, burying themselves in our bones to become corpses we carry into the future, all the time digging and failing to rip their skeletons from our flesh.

      "No, everyone does that. He's not the first. You don't get it. It's hard." I try to explain things to him in bits and pieces, sobbing and crying, trying to form words. Except I can't.

      "Take your time, okay." He says gently. 

      I take some deep breaths and try to compose myself. But how do I tell him I want a real relationship, and I want someone to love me, and I just wish to love.

      Love. Such a simple word with such complex and complicated meanings behind it.

      All the movies I've watched and all the books I've read have all described love the same way-exhilarating and consuming. But for me, love has a totally different meaning.

      "Growing up, my parents had the perfect relationship. They went on lunch and dinner dates, ice cream runs, family game nights, and vacations; all the normal things families do. I used to hope I would get to experience that kind of love when I was older, but that never happened. The hope is slowly slipping from my hand and I can't seem to hold onto that." I finally start. 

      "I try to be this cool independent girl who doesn't need a man, but I want someone to fall back to. I want someone to love me. And no matter what I do, I'm the one who always ends up alone, crying myself to sleep." 

      "You don't find love. It finds you. It's got a little bit to do with destiny, fate, and what's written in the stars." He says sincerely.

      "I know! It's just, is it just so hard to love me? Why can't I seem to find love?" I stop and start picking the grasses. I know he'll wait for me. For when I'm ready to speak. I ponder over my thoughts and try to find something. 

      The worst part is no one really tells me what my fault is, like please, just tell me, what am I lacking or if I am broken or anything. So I can fix myself, and then maybe, someone would love me too. I am just so sick and tired of constantly trying hard to get nothing in return.

      "You know, there are people around here who're in relationships, doing all the cute things and being happy, but I think most of them don't even respect it. They cheat, lie, go behind each other's back, become toxic, and eventually break up. It's so clear they don't appreciate it, but they still have it. And then there's me, who genuinely wants love in her life, but doesn't have it." I breathe the words, and I see his eyes are glancing back at me in wonder. 

      "I understand what you're feeling. But trust me, you hold a world inside of you, a world full of light and marvels, a world full of magic and miracles. And you feel you're unlovable, but that's not true. I believe that you're going to get the most exciting love than others." he murmurs.

      "You cannot be replaced", He breaths. "You're pieces of all the places you've been and the people you've loved. You've been stitched together by song lyrics, book quotes, adventure, late-night conversations, moonlight, and the smell of coffee."

      Je te souris je te nuis je t'aime, je t'aime
      Je te detruis je te tiens et tu viens

      "I guess your phone's ringing." I chuckle a bit, listening to his ringtone.

      "Shit!" He looks at the screen then types something. "I gotta go!" He says abruptly. I look up at him standing, but before I can utter any words, he's gone. 

      "Ma'am, are you okay?" The cabbie pulled me out of the memory. I didn't realize I was crying. "Yes, Yes, I'm fine!" I wiped up my face. He didn't seem convinced. "Do you want me to?" He gestured towards the radio. "No, keep playing the song."

      Je t'aime tant je t'aime tant pourtant
      Je t'aime tant, je t'aime tant

      I take a deep breath and close my eyes. The song is soothing. I could feel him almost sitting beside me. Like he is close to me. I open my eyes, and he is here. He is sitting right here. I try to touch him, but the next moment, he vanishes amidst the air. Suddenly I'm alone. All by myself. Like I was all those years ago.

      "You can never replace anyone because everyone is made up of such beautiful specific details." I saw this quote in one of the movies, and it's been my favourite ever since. He told me how I was irreplaceable, but it's not true. I think I'm still in love with him. Even after all these years, I still love him. And no matter how much I try to find someone who loves me, he cannot be replaced, and I can never love someone like I love him.

      "Hey! Umm, take the next right turn. Please" The cabbie looks anxious, but this is what I want. This time I decide to take matters into my hand. And I finally decide to find him.

      THE END`,
    author: "Khushi Anand",
    coverImage: "/love.jpg",
    customDate: new Date("2021-11-17")
  },

  {
    title: "My Pint of Ice Cream",
    summary: "After brushing my hair neatly, I finally looked in the mirror and spotted a red patch on my neck. I took the concealer from my handbag...",
    content: `After brushing my hair neatly, I finally looked in the mirror and spotted a red patch on my neck. I took the concealer from my handbag and started applying it to the area. I didn't realize when I zoned out until the ringing of my phone startled me. I peeped at it and saw the caller ID of my son. I sighed shakily and looked in the mirror towards Kabir, who was putting his watch on. I turned around and called him out. "You know, I think we should stop this now."

      Kabir looked up at me strangely and smiled. "What are you talking about?"

      I sighed, disheartened, and turned back to look in the mirror to avoid looking into his eyes. "This whole sneaking around thing. I honestly just can't do this anymore." I started touching the area with concealer more heavily now, but the hickey just wouldn't disappear.

      He came behind me and smiled goofily at me through the mirror. He said, "Then you should file up for divorce now. I think it is time. What say?"

      The fact that he was taking this so lightly made me annoyed. I stood up and moved away from him towards my bag, then I took a turtleneck and frowned up at Kabir. "That isn't possible. What am I going to say to Rihaan? He will not understand. I can't leave my family for a mere affair." As I said those words, hurt flashed through his face instantly. He opened his mouth to say something, but I spun around to go to the ensuite.

      I came back after wearing a turtleneck to find Kabir sitting on the bed with his arms on his knees. Moreover, judging by the look of betrayal on his face, I knew I shouldn’t  have put the words like that.

      Kabir stood and looked at me, "we love each other, and anything you say will not change the truth. And, I have decided everything for us. You do not have to worry about it."

      When I kept looking at him blankly, he took my hand and dragged me to the bed. I sat there quietly with a million thoughts floating in my head. He crouched in front of me and spoke gently, "Natasha, you do not deserve him. Just give him a divorce, and then we will move to London. I'm serious. Okay? Just divorce him. Everything will fall into place after that. Rihaan also likes me. He is minor, and you will have his full custody." My eyes were filled with tears after hearing Kabir's innocent words, but despite everything, I shook my head gently.

      He sighed, "I can earn enough money from my gallery to make a living for us, Natasha. Or even if it will not be sufficient, I'll work more jobs. You can move your company to London also. And I'll support you completely on that. Or you do not have to work if you do not want to. Nevertheless, I know you love your company. And I'll support you, Natasha. In everything. I'll not let you or Rihaan suffer ever. Pease? Please think about it."

      When I heard him plan a future for us, I couldn't stop my tears from flowing. Because I knew it was never going to happen. There was no future for Kabir and I. He was too earnest. Like a pint of ice cream at midnight. You know you shouldn’t  be eating it, but that is what makes it tastes so good.

      In that instant, my fear was all-consuming as anything I had ever experienced. I prayed for a sign that it was still a dream, a bad dream, but what seemed an eternity, there was nothing except the truth. I watched as Kabir closed his eyes, and when he finally opened them, he couldn't meet my eyes. I realized then that he was as terrified as I was. He was terrified of what our future would hold for us.

      Kabir finally spoke. "It is going to be fine." With such intensity he said, I knew he was determined to make things okay. I just did not know where his determination would lead us.

      But suddenly, Rihaan's face flashed through my mind, and I got away from him as if he was burning. "NO!!!" I did nothing but yell at him at the top of my lungs, daring him to disagree with me again.

      "No, Kabir," I repeated myself clearly for him to understand. He raised an eyebrow at me. He is looking at me like I'm some five-year-old kid who is throwing a tantrum. "Okay. Let's sort this out some other day. All right?" It ticked me off more than before, and I found myself questioning everything we ever had.

      His hazel-green eyes mocked me, and I felt the urge to prove him wrong in every way. Suddenly, I saw everything very clearly for the first time. Suddenly, I became aware of all the unfair things that I had neglected. Suddenly, I felt like his love had blinded me.

      "How amazing! You think everything is fine. I think things are terrible. We see life so differently. Avoiding this talk will not help anyone. I can't live another day through my life knowing I'm betraying my family. We are done, Kabir. Really." I clarified again, but knowing him, I knew it wouldn't be the last time I would say this. Kabir being persistent is good, but then, it was going to make things hard for me. He would try to persuade me again. He would say some sweet words to me, knowing it would work on me just like the last hundred times it did. However, that was what I liked about him the most. He was expressive. He was kind and gentle to me, unlike my own husband.

      "Natasha, Arjun does not appreciate you. Why can't you see that? He takes credit for your success every time he gets the opportunity." Kabir said, narrowing his eyes at me.

      I could feel blood creeping up past my neckline. Looking at the other side, I sighed, "That is not what Arjun means."

      He gave me a disbelieving look. "I have seen him talking about you in Award Functions. You are successful today only because he allowed you to work. Really? Allowing someone means you are in a position of authority, of control. And that is not fair. Strong and independent women like you don't need anybody's consent to work. You started your company from scratch. And look at where you are now—businesswomen of the year. Do not let him treat you like shit, Natasha. Please!" I pondered over his words for a moment, but he did not know that Arjun was changing. Slowly indeed, but he was.

      I couldn't let anyone say I failed to be a good wife. I couldn't let my son live with his time divided between his mother and father. Rihaan was only seven then. It was going to affect him mentally. He loved his dad too much. He idolized him, and he was right to do so. Arjun was not a bad dad. He was an amazing person, and according to Forbes, he was among the top ten businessmen in the world. Arjun Suri was everything a person wished to be. He just did not have time for me. And I couldn't be selfish and think about my happiness only.

      "Let me go." The three words, so simple yet hold so much power.

      His body jerked back at my words as if physically hurt and shocked by them all at the same time. "What?" he breathed.

      "Let me go." I took a deep breath and gathered all the courage inside myself to repeat what I'd meant to say for weeks. Although my voice still broke at the end, barely able to say the last three words.

      He took a step towards me, but I stepped away. And with that single step, his face fell and crumbled until I could see the pain clear as day on his face. "I do not understand..." he trailed. "What does that mean?" he asked.

      I wiped at my face, tired of crying and hating that I was also crying in front of Kabir. I hated showing that side of me. It was weak, and he already owned so much of me.

      "Natasha, listen to me," he started, but I refused to let him finish. "Let me go," I yelled. "Please," I begged. "I can't do this anymore, I can't live like this, I can't look at my son every day and remember what we did, I can't anymore..." I trailed. "I simply cannot, Kabir. Please!"

      My whole body was hurting. Kabir had to let me go. He had to! I couldn't do this with him anymore. I loved Arjun, but I loved Kabir more. And it was hurting me a lot, more than I wanted to admit, to end something so pure. I had to choose between them. But when I asked myself honestly, Kabir was never the option. It was always Arjun, my family. I made a mistake. And I knew I should redeem myself. I was wrong to love Kabir. I was wrong to let him love me. I was wrong to let him believe that we could be something someday. It was all wrong, and it all needed to end. It had to end. I wanted to be happy and love Arjun more, but I couldn't with Kabir looming over me and waiting and questioning me.

      "Shh," he breathed as his fingers wiped the uncontrollable tears that had fallen from my eyes. The salty tears soaked his hands, but he did not stop holding my face and pulling me close to him. He dipped his face so that he could look at me, and I meant really, looking at me. His eyes crawled over every inch of my face as if I had the answers to all of life's questions written somewhere on my face. "Let you go," he whispered.

      I nodded as I choked back another sob. "Let me go," I repeated.

      The pad of his thumb caressed my cheekbone tenderly. "I love you, Natasha—"

      I shook my head, repeating, "No," over and over again, trying to get him to let go of my face.

      Kabir wouldn't release my face or my body and tightened his hold on me, refusing to free me of him. "Natasha, I love you, and that is why I'll let you go," he said finally.

      I stopped my weak attempts at getting away from him and still at his words. "What?" I breathed.

      His bright hazel-green eyes held mine, and his lips trembled lightly. "Because you want me to, because I know this can't go on forever, and because I love you so damn much that I just want you to be happy," he paused as his eyes began to glisten. "Even if it is not with me." His last words really had hit me hard, and more tears began to fall onto his skin.

      "Kabir," I breathed his name, unable to find any other word for that moment.

      "I'm letting you go," he said as he squeezed his eyes shut.

      "Thank you," I said so quietly that I was unsure he even heard me.

      "I love you, Kabir Dewan, but sometimes loving each other is not enough." After speaking my heart out , I took my duffle bag and car keys. My eyes were stinging with hot tears.

      "The least you can do is talk through these things with your husband. Know your worth. You deserve better. Do not avoid things. Avoidance sounds like a harmless word, but that one word can cause severe damage to a relationship." He spoke as I was about to get out of the door.

      My heart squeezed in pain as he said that. Knots in my stomach ached, and they had pulled tighter as the knots grew. How could I do this to him? How could I hurt Kabir in this way? My thoughts spun as the knot pulled, making my heart hurt in a way I had not felt in a while. Because my heart was not breaking for me this time, it was breaking for Kabir.

      He took a sharp intake of breath, and I knew he was about to say more. I turned and looked directly into his eyes, unable to listen to him anymore. "Goodbye, Kabir," I said.

      There was a slight pause before he again said, "Goodbye."

      And with that, tears burst from my eyes because out of everything that had happened. It was the worst because it made me feel real.

      We were really over. Done. Never again.

      Kabir let me go.

      The sky was filtered with red and orange hues by the time I came outside. Like someone had smeared a paintbrush across the horizon to make a canvas transitioning a beautiful day into a clear night.

      Solitude. To most people, when the sun went down, it signalled the end of the day. But for certain people, when the sun went down, and the moon shone, it provided shelter. A silent promise that whichever part you chose to reveal in the dark, it would remain there, in secret.

      I stepped inside my car and breathed deeply, closing my eyes for a moment. I tried to keep my tears from flowing but failed.

      The ringing of my phone alarmed me, and I looked at it to see Rihaan calling me again. I composed myself for a second and then picked up the phone.

      "MOM!!" He did not even make it to a greeting before he laughed, loud and wild. I smiled instantly despite everything that had happened in the last hour. "Calm down, Rihaan. How was your day? And tell me why you are so happy?"

      "Awesome. Listen, Mom," Rihaan shouted through the phone so loudly that I had put my phone away for a while. He was always shouting. He never spoke in a reasonable tone. Who knew where that came from. "Daddy is home. He came back early because he said he missed me a lot."

      My breathing was ragged and erratic, but I was glad Rihaan couldn't notice. "Well, that's great."

      "Yes, mom. When are you coming back? I want to play with you both." I could feel him pouting like a tiny baby.

      "I'll be back till bedtime, but do not wait up for me. Okay?" I could tell he would be hoping for a different answer but wouldn't say a word for my respect.

      He murmured. "Fine, mom. Dad..." I heard Rihaan talking to Arjun, and I felt my stomach begin to clench. Words were becoming hard to form, my thoughts were beginning to scatter.

      "Mom, Daddy is showing me how to play football. So I'll call you later." I swallowed, forcing the tightness from my throat. "Okay, Play Safely. I love you, baby."

      "Love you too, mom!" He hung up, and finally, the tears came back.

      I felt like I had finally experienced true love, and it was, in fact, like seeing a shooting star for the first time. It was breathless, perfect and magical and sadly, short-lived.

      It was almost three AM by the time I reached home. Assuming everyone was sleeping, I entered quietly into the house and had started walking upstairs. But the creaking of the door froze me. I turned and saw Arjun standing outside his workspace. He looked at the wall clock and then stared at me. I knew he was looking at me for answers. However, I couldn't give him one.

      My throat was hoarse from all the sobbing and crying on the way back. My eyes were red and puffed as well. Feeling guilty, I lowered my gaze and just stood there, waiting for him to say something. A minute passed, and when he didn't, I looked up to see him smiling sadly at me. A faint little sad smile was curving his lips. There was something in his eyes which I couldn't pinpoint, but it hooked me at my place.

      I did not know how many minutes or hours passed while we kept looking at each other. But suddenly, Arjun turned and headed inside the room and closed the door without giving me another glance.

      And I just stood there staring at the closed door of his room. Knowing I wouldn't be able to forget that day.

      A day I have not forgotten yet.

      "Natasha!" A voice startles me. I look around subconsciously, and notice that the museum is getting crowded with each passing time. I wonder since when was I lost in my thoughts.

      As I stare at the name, Kabir Dewan, peeking out from one corner of a painting covered in white sheets, I realize I do not feel anything.

      "Come on. Aren't you bored yet?" Out of nowhere, Arjun hugs me from behind. With a smile on my face, I shake his hands from me and lean towards him. However, before I can say anything, Rihaan answers loudly. "Yes, I am!"

      We both turn to look at him to see him smiling big with a camera in his hand that Arjun gifted him recently on his eleventh birthday. "Let's go, mom and dad. I want to eat ice cream now!"

      "No, let's head to McDonald's." Arjun breaks away from me and walks towards Rihaan. "But I want ice cream!! Please, Dad!" Rihaan begs. Arjun tries hard to look tough, but I know he would give his son whatever he wants.

      I study the other visitors around, but nobody bothers to give a second glance at the painting. I wonder in a gallery full of people why Kabir's painting is covered, and why nobody tries to unveil it, it is not like the painting is restricted or something.

      I look back at the painting and want to look inside it. However, as I'm about to turn it, I realize I shouldn’t. I block out the old memories and focus on making new ones.

      Arjun and Rihaan keep on bickering about what to eat while I look back at the covered painting one more time and then proceed to move towards the exit with my family. Leaving that painting untouched. Leaving my past untouched.

      THE END`,
    author: "Khushi Anand",
    coverImage: "/icecream.jpg",
    customDate: new Date("2021-12-23")
  },
];

const seed = async () => {
  await Blog.deleteMany(); 
  await Blog.insertMany(seedBlogs);
  console.log("5 blogs seeded");
  mongoose.disconnect();
};

seed();
