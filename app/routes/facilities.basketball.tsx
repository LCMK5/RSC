import Header from "../components/Header";
import Footer from "../components/Footer";
import Basketball_00 from "~/IMG/0/Basketball.png";
import LeBron_James from "~/IMG/0/LBJ.webp";
import Curry from "~/IMG/0/Curry.webp";
import Jokic from "~/IMG/0/Jokic.webp";

export default function Basketball() {
    const bkb = [
        { img: LeBron_James, name: "LeBron James" },
        { img: Curry, name: "Stephen Curry" },
        { img: Jokic, name: "Nikola Jokić" },
    ];
    return (
        <>
            <Header />
            <main>
                <img src={Basketball_00} alt="Basketball_00"/>
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <p>
                        Basketball is a team sport in which two teams, most commonly of five players each, opposing one
                        another on a rectangular court, compete with the primary objective of shooting a basketball
                        (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches
                        (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court),
                        while preventing the opposing team from shooting through their own hoop. A field goal is worth
                        two points, unless made from behind the three-point line, when it is worth three. After a foul,
                        timed play stops and the player fouled or designated to shoot a technical foul is given one, two
                        or three one-point free throws. The team with the most points at the end of the game wins, but
                        if regulation play expires with the score tied, an additional period of play (overtime) is
                        mandated.<br/><br/>

                        Players advance the ball by bouncing it while walking or running (dribbling) or by passing it to
                        a teammate, both of which require considerable skill. On offense, players may use a variety of
                        shots – the layup, the jump shot, or a dunk; on defense, they may steal the ball from a
                        dribbler, intercept passes, or block shots; either offense or defense may collect a rebound,
                        that is, a missed shot that bounces from rim or backboard. It is a violation to lift or drag
                        one's pivot foot without dribbling the ball, to carry it, or to hold the ball with both hands
                        then resume dribbling.<br/><br/>

                        The five players on each side fall into five playing positions. The tallest player is usually
                        the center, the second-tallest and strongest is the power forward, a slightly shorter but more
                        agile player is the small forward, and the shortest players or the best ball handlers are the
                        shooting guard and the point guard, who implement the coach's game plan by managing the
                        execution of offensive and defensive plays (player positioning). Informally, players may play
                        three-on-three, two-on-two, and one-on-one.<br/><br/>

                        Invented in 1891 by Canadian-American gym teacher James Naismith in Springfield, Massachusetts,
                        in the United States, basketball has evolved to become one of the world's most popular and
                        widely viewed sports. The National Basketball Association (NBA) is the most significant
                        professional basketball league in the world in terms of popularity, salaries, talent, and level
                        of competition (drawing most of its talent from U.S. college basketball). Outside North
                        America, the top clubs from national leagues qualify to continental championships such as the
                        EuroLeague and the Basketball Champions League Americas. The FIBA Basketball World Cup and Men's
                        Olympic Basketball Tournament are the major international events of the sport and attract top
                        national teams from around the world. Each continent hosts regional competitions for national
                        teams, like EuroBasket and FIBA AmeriCup.<br/><br/>

                        The FIBA Women's Basketball World Cup and Women's Olympic Basketball Tournament feature top
                        national teams from continental championships. The main North American league is the WNBA (NCAA
                        Women's Division I Basketball Championship is also popular), whereas the strongest European
                        clubs participate in the EuroLeague Women.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Rules:</b></h1>
                    <p>
                        Measurements and time limits discussed in this section often vary among tournaments and
                        organizations; international and NBA rules are used in this section.

                        The object of the game is to outscore one's opponents by throwing the ball through the
                        opponents' basket from above while preventing the opponents from doing so on their own. An
                        attempt to score in this way is called a shot. A successful shot is worth two points, or three
                        points if it is taken from beyond the three-point arc 6.75 metres (22 ft 2 in) from the basket
                        in international games and 23 feet 9 inches (7.24 m) in NBA games. A one-point shot can
                        be earned when shooting from the foul line after a foul is made. After a team has scored from a
                        field goal or free throw, play is resumed with a throw-in awarded to the non-scoring team taken
                        from a point beyond the endline of the court where the points were scored.<br/><br/>

                        <b>Playing Regulations</b><br/><br/>
                        Games are played in four quarters of 10 (FIBA) or 12 minutes (NBA). College men's games
                        use two 20-minute halves, college women's games use 10-minute quarters, and most United
                        States high school varsity games use 8-minute quarters; however, this varies from state to
                        state. 15 minutes are allowed for a half-time break under FIBA, NBA, and NCAA
                        rules and 10 minutes in United States high schools. Overtime periods are five
                        minutes in length except for high school, which is four minutes in length. Teams
                        exchange baskets for the second half. The time allowed is actual playing time; the clock is
                        stopped while the play is not active. Therefore, games generally take much longer to complete
                        than the allotted game time, typically about two hours.<br/><br/>

                        Five players from each team may be on the court at one time. Substitutions are
                        unlimited but can only be done when play is stopped. Teams also have a coach, who oversees the
                        development and strategies of the team, and other team personnel such as assistant coaches,
                        managers, statisticians, doctors and trainers.<br/><br/>

                        For both men's and women's teams, a standard uniform consists of a pair of shorts and a jersey
                        with a clearly visible number, unique within the team, printed on both the front and back.
                        Players wear high-top sneakers that provide extra ankle support. Typically, team names, players'
                        names and, outside of North America, sponsors are printed on the uniforms.<br/><br/>

                        A limited number of time-outs, clock stoppages requested by a coach (or sometimes mandated in
                        the NBA) for a short meeting with the players, are allowed. They generally last no longer than
                        one minute (100 seconds in the NBA) unless, for televised games, a commercial break is
                        needed.<br/><br/>

                        The game is controlled by the officials consisting of the referee (referred to as crew chief in
                        the NBA), one or two umpires (referred to as referees in the NBA) and the table officials. For
                        college, the NBA, and many high schools, there are a total of three referees on the court. The
                        table officials are responsible for keeping track of each team's scoring, timekeeping,
                        individual and team fouls, player substitutions, team possession arrow, and the shot clock.<br/><br/>

                        <b>Equipment</b><br/><br/>
                        The only essential equipment in a basketball game is the ball and the court: a flat, rectangular
                        surface with baskets at opposite ends. Competitive levels require the use of more equipment such
                        as clocks, score sheets, scoreboards, alternating possession arrows, and whistle-operated
                        stop-clock systems.<br/><br/>

                        A regulation basketball court in international games is 28 meters (92 feet) long and 15 meters
                        (49 feet) wide. In the NBA and NCAA the court is 94 by 50 feet (29 by 15 meters). Most
                        courts have wood flooring, usually constructed from maple planks running in the same direction
                        as the longer court dimension. The name and logo of the home team is usually painted on
                        or around the center circle.<br/><br/>

                        The basket is a steel rim 18 inches (46 cm) diameter with an attached net affixed to a backboard
                        that measures 6 by 3.5 feet (1.8 by 1.1 meters) and one basket is at each end of the court. The
                        white outlined box on the backboard is 18 inches (46 cm) high and 2 feet (61 cm) wide. At almost
                        all levels of competition, the top of the rim is exactly 10 feet (3.05 meters) above the court
                        and 4 feet (1.22 meters) inside the baseline. While variation is possible in the dimensions of
                        the court and backboard, it is considered important for the basket to be of the correct height –
                        a rim that is off by just a few inches can have an adverse effect on shooting. The net must
                        "check the ball momentarily as it passes through the basket" to aid the visual confirmation that
                        the ball went through. The act of checking the ball has the further advantage of slowing
                        down the ball so the rebound does not go as far.<br/><br/>

                        The size of the basketball is also regulated. For men, the official ball is 29.5 inches (75 cm)
                        in circumference (size 7, or a "295 ball") and weighs 22 oz (620 g). If women are playing, the
                        official basketball size is 28.5 inches (72 cm) in circumference (size 6, or a "285 ball") with
                        a weight of 20 oz (570 g). In 3x3, a formalized version of the halfcourt 3-on-3 game, a
                        dedicated ball with the circumference of a size 6 ball but the weight of a size 7 ball is used
                        in all competitions (men's, women's, and mixed teams).<br/><br/>

                        <b>Violations</b><br/><br/>
                        The ball may be advanced toward the basket by being shot, passed between players, thrown,
                        tapped, rolled or dribbled (bouncing the ball while running).<br/><br/>

                        The ball must stay within the court; the last team to touch the ball before it travels out of
                        bounds forfeits possession. The ball is out of bounds if it touches a boundary line, or touches
                        any player or object that is out of bounds.<br/><br/>

                        There are limits placed on the steps a player may take without dribbling, which commonly results
                        in an infraction known as traveling. Nor may a player stop their dribble and then resume
                        dribbling. A dribble that touches both hands is considered stopping the dribble, giving this
                        infraction the name double dribble. Within a dribble, the player cannot carry the ball by
                        placing their hand on the bottom of the ball; doing so is known as carrying the ball. A team,
                        once having established ball control in the front half of their court, may not return the ball
                        to the backcourt and be the first to touch it. A violation of these rules results in loss of
                        possession.<br/><br/>

                        The ball may not be kicked, nor be struck with the fist. For the offense, a violation of these
                        rules results in loss of possession; for the defense, most leagues reset the shot clock and the
                        offensive team is given possession of the ball out of bounds.<br/><br/>

                        There are limits imposed on the time taken before progressing the ball past halfway (8 seconds
                        in FIBA and the NBA; 10 seconds in NCAA and high school for both sexes), before attempting a
                        shot (24 seconds in FIBA, the NBA, and U Sports (Canadian universities) play for both sexes, and
                        30 seconds in NCAA play for both sexes), holding the ball while closely guarded (5 seconds), and
                        remaining in the restricted area known as the free-throw lane, (or the "key") (3 seconds). These
                        rules are designed to promote more offense.<br/><br/>

                        There are also limits on how players may block an opponent's field goal attempt or help a
                        teammate's field goal attempt. Goaltending is a defender's touching of a ball that is on a
                        downward flight toward the basket, while the related violation of basket interference is the
                        touching of a ball that is on the rim or above the basket, or by a player reaching through the
                        basket from below. Goaltending and basket interference committed by a defender result in
                        awarding the basket to the offense, while basket interference committed by an offensive player
                        results in cancelling the basket if one is scored. The defense gains possession in all cases of
                        goaltending or basket interference.<br/><br/>

                        <b>Fouls</b><br/><br/>
                        An attempt to unfairly disadvantage an opponent through certain types of physical contact is
                        illegal and is called a personal foul. These are most commonly committed by defensive players;
                        however, they can be committed by offensive players as well. Players who are fouled either
                        receive the ball to pass inbounds again, or receive one or more free throws if they are fouled
                        in the act of shooting, depending on whether the shot was successful. One point is awarded for
                        making a free throw, which is attempted from a line 15 feet (4.6 m) from the basket.<br/><br/>

                        The referee is responsible for judging whether contact is illegal, sometimes resulting in
                        controversy. The calling of fouls can vary between games, leagues and referees.<br/><br/>

                        There is a second category of fouls called technical fouls, which may be charged for various
                        rules violations including failure to properly record a player in the scorebook, or for
                        unsportsmanlike conduct. These infractions result in one or two free throws, which may be taken
                        by any of the five players on the court at the time. Repeated incidents can result in
                        disqualification. A blatant foul involving physical contact that is either excessive or
                        unnecessary is called an intentional foul (flagrant foul in the NBA). In FIBA and NCAA women's
                        basketball, a foul resulting in ejection is called a disqualifying foul, while in leagues other
                        than the NBA, such a foul is referred to as flagrant.<br/><br/>

                        If a team exceeds a certain limit of team fouls in a given period (quarter or half) – four for
                        NBA, NCAA women's, and international games – the opposing team is awarded one or two free throws
                        on all subsequent non-shooting fouls for that period, the number depending on the league. In the
                        US college men's game and high school games for both sexes, if a team reaches 7 fouls in a half,
                        the opposing team is awarded one free throw, along with a second shot if the first is made. This
                        is called shooting "one-and-one". If a team exceeds 10 fouls in the half, the opposing team is
                        awarded two free throws on all subsequent fouls for the half.<br/><br/>

                        When a team shoots foul shots, the opponents may not interfere with the shooter, nor may they
                        try to regain possession until the last or potentially last free throw is in the air.<br/><br/>

                        After a team has committed a specified number of fouls, the other team is said to be "in the
                        bonus". On scoreboards, this is usually signified with an indicator light reading "Bonus" or
                        "Penalty" with an illuminated directional arrow or dot indicating that team is to receive free
                        throws when fouled by the opposing team. (Some scoreboards also indicate the number of fouls
                        committed.)<br/><br/>

                        If a team misses the first shot of a two-shot situation, the opposing team must wait for the
                        completion of the second shot before attempting to reclaim possession of the ball and continuing
                        play.<br/><br/>

                        If a player is fouled while attempting a shot and the shot is unsuccessful, the player is
                        awarded a number of free throws equal to the value of the attempted shot. A player fouled while
                        attempting a regular two-point shot thus receives two shots, and a player fouled while
                        attempting a three-point shot receives three shots.<br/><br/>

                        If a player is fouled while attempting a shot and the shot is successful, typically the player
                        will be awarded one additional free throw for one point. In combination with a regular shot,
                        this is called a "three-point play" or "four-point play" (or more colloquially, an "and one")
                        because of the basket made at the time of the foul (2 or 3 points) and the additional free throw
                        (1 point).<br/><br/>

                        <b>Positions</b><br/><br/>
                        Although the rules do not specify any positions whatsoever, they have evolved as part of
                        basketball. During the early years of basketball's evolution, two guards, two forwards, and one
                        center were used. In more recent times specific positions evolved, but the current trend,
                        advocated by many top coaches including Mike Krzyzewski, is towards positionless basketball,
                        where big players are free to shoot from outside and dribble if their skill allows it. Popular descriptions of positions include:<br/><br/>

                        Point guard: usually the fastest player on the team, organizes the
                        team's offense by controlling the ball and making sure that it gets to the right player at the
                        right time.<br/><br/>

                        Shooting guard: creates a high volume of shots on offense, mainly long-ranged; and
                        guards the opponent's best perimeter player on defense.<br/><br/>

                        Small forward: often primarily responsible for scoring points via cuts to the basket
                        and dribble penetration; on defense seeks rebounds and steals, but sometimes plays more
                        actively.<br/><br/>

                        Power forward: plays offensively often with their back to the basket; on defense,
                        plays under the basket (in a zone defense) or against the opposing power forward (in man-to-man
                        defense).<br/><br/>

                        Center: uses height and size to score (on offense), to protect the basket closely (on
                        defense), or to rebound.<br/><br/>

                        The above descriptions are flexible. For most teams today, the shooting guard and small forward
                        have very similar responsibilities and are often called the wings, as do the power forward and
                        center, who are often called post players. While most teams describe two players as guards, two
                        as forwards, and one as a center, on some occasions teams choose to call them by different
                        designations.<br/><br/>

                        <b>Strategy</b><br/><br/>
                        There are two main defensive strategies: zone defense and man-to-man defense. In a zone defense,
                        each player is assigned to guard a specific area of the court. Zone defenses often allow the
                        defense to double team the ball, a manoeuver known as a trap. In a man-to-man defense, each
                        defensive player guards a specific opponent.<br/><br/>

                        Offensive plays are more varied, normally involving planned passes and movement by players
                        without the ball. A quick movement by an offensive player without the ball to gain an
                        advantageous position is known as a cut. A legal attempt by an offensive player to stop an
                        opponent from guarding a teammate, by standing in the defender's way such that the teammate cuts
                        next to him, is a screen or pick. The two plays are combined in the pick and roll, in which a
                        player sets a pick and then "rolls" away from the pick towards the basket. Screens and cuts are
                        very important in offensive plays; these allow the quick passes and teamwork, which can lead to
                        a successful basket. Teams almost always have several offensive plays planned to ensure their
                        movement is not predictable. On court, the point guard is usually responsible for indicating
                        which play will occur.<br/><br/>

                        <b>Shooting</b><br/><br/>
                        Player releases a short jump shot, while her defender is either knocked down, or trying to "take
                        a charge".<br/><br/>

                        Shooting is the act of attempting to score points by throwing the ball through the basket,
                        methods varying with players and situations.<br/><br/>

                        Typically, a player faces the basket with both feet facing the basket. A player will rest the
                        ball on the fingertips of the dominant hand (the shooting arm) slightly above the head, with the
                        other hand supporting the side of the ball. The ball is usually shot by jumping (though not
                        always) and extending the shooting arm. The shooting arm, fully extended with the wrist fully
                        bent, is held stationary for a moment following the release of the ball, known as a
                        follow-through. Players often try to put a steady backspin on the ball to absorb its impact with
                        the rim. The ideal trajectory of the shot is somewhat controversial, but generally a proper arc
                        is recommended. Players may shoot directly into the basket or may use the backboard to redirect
                        the ball into the basket.<br/><br/>

                        The two most common shots that use the above described setup are the set shot and the jump shot.
                        Both are preceded by a crouching action which preloads the muscles and increases the power of
                        the shot. In a set shot, the shooter straightens up and throws from a standing position with
                        neither foot leaving the floor; this is typically used for free throws. For a jump shot, the
                        throw is taken in mid-air with the ball being released near the top of the jump. This provides
                        much greater power and range, and it also allows the player to elevate over the defender.
                        Failure to release the ball before the feet return to the floor is considered a traveling
                        violation.<br/><br/>

                        Another common shot is called the layup. This shot requires the player to be in motion toward
                        the basket, and to "lay" the ball "up" and into the basket, typically off the backboard (the
                        backboard-free, underhand version is called a finger roll). The most crowd-pleasing and
                        typically highest-percentage accuracy shot is the slam dunk, in which the player jumps very high
                        and throws the ball downward, through the basket while touching it.<br/><br/>

                        Another shot that is less common than the layup, is the "circus shot". The circus shot is a
                        low-percentage shot that is flipped, heaved, scooped, or flung toward the hoop while the shooter
                        is off-balance, airborne, falling down or facing away from the basket. A back-shot is a shot
                        taken when the player is facing away from the basket, and may be shot with the dominant hand, or
                        both; but there is a very low chance that the shot will be successful.<br/><br/>

                        A shot that misses both the rim and the backboard completely is referred to as an air ball. A
                        particularly bad shot, or one that only hits the backboard, is jocularly called a brick. The
                        hang time is the length of time a player stays in the air after jumping, either to make a slam
                        dunk, layup or jump shot.<br/><br/>

                        <b>Rebounding</b><br/><br/>
                        The objective of rebounding is to successfully gain possession of the basketball after a missed
                        field goal or free throw, as it rebounds from the hoop or backboard. This plays a major role in
                        the game, as most possessions end when a team misses a shot. There are two categories of
                        rebounds: offensive rebounds, in which the ball is recovered by the offensive side and does not
                        change possession, and defensive rebounds, in which the defending team gains possession of the
                        loose ball. The majority of rebounds are defensive, as the team on defense tends to be in better
                        position to recover missed shots; for example, about 75% of rebounds in the NBA are
                        defensive.<br/><br/>

                        <b>Passing</b><br/><br/>
                        A pass is a method of moving the ball between players. Most passes are accompanied by a step
                        forward to increase power and are followed through with the hands to ensure accuracy.<br/><br/>

                        A staple pass is the chest pass. The ball is passed directly from the passer's chest to the
                        receiver's chest. A proper chest pass involves an outward snap of the thumbs to add velocity and
                        leaves the defence little time to react.<br/><br/>

                        Another type of pass is the bounce pass. Here, the passer bounces the ball crisply about
                        two-thirds of the way from his own chest to the receiver. The ball strikes the court and bounces
                        up toward the receiver. The bounce pass takes longer to complete than the chest pass, but it is
                        also harder for the opposing team to intercept (kicking the ball deliberately is a violation).
                        Thus, players often use the bounce pass in crowded moments, or to pass around a
                        defender.<br/><br/>

                        The overhead pass is used to pass the ball over a defender. The ball is released while over the
                        passer's head.<br/><br/>

                        The outlet pass occurs after a team gets a defensive rebound. The next pass after the rebound is
                        the outlet pass.<br/><br/>

                        The crucial aspect of any good pass is it being difficult to intercept. Good passers can pass
                        the ball with great accuracy and they know exactly where each of their other teammates prefers
                        to receive the ball. A special way of doing this is passing the ball without looking at the
                        receiving teammate. This is called a no-look pass.<br/><br/>

                        Another advanced style of passing is the behind-the-back pass, which, as the description
                        implies, involves throwing the ball behind the passer's back to a teammate. Although some
                        players can perform such a pass effectively, many coaches discourage no-look or behind-the-back
                        passes, believing them to be difficult to control and more likely to result in turnovers or
                        violations.<br/><br/>

                        <b>Dribbling</b><br/><br/>
                        Dribbling is the act of bouncing the ball continuously with one hand and is a requirement for a
                        player to take steps with the ball. To dribble, a player pushes the ball down towards the ground
                        with the fingertips rather than patting it; this ensures greater control.<br/><br/>

                        When dribbling past an opponent, the dribbler should dribble with the hand farthest from the
                        opponent, making it more difficult for the defensive player to get to the ball. It is therefore
                        important for a player to be able to dribble competently with both hands.<br/><br/>

                        Good dribblers (or "ball handlers") tend to keep their dribbling hand low to the ground,
                        reducing the distance of travel of the ball from the floor to the hand, making it more difficult
                        for the defender to "steal" the ball. Good ball handlers frequently dribble behind their backs,
                        between their legs, and switch directions suddenly, making a less predictable dribbling pattern
                        that is more difficult to defend against. This is called a crossover, which is the most
                        effective way to move past defenders while dribbling.<br/><br/>

                        A skilled player can dribble without watching the ball, using the dribbling motion or peripheral
                        vision to keep track of the ball's location. By not having to focus on the ball, a player can
                        look for teammates or scoring opportunities, as well as avoid the danger of having someone steal
                        the ball away from him/her.<br/><br/>

                        <b>Blocking</b><br/><br/>
                        A block is performed when, after a shot is attempted, a defender succeeds in altering the shot
                        by touching the ball. In almost all variants of play, it is illegal to touch the ball after it
                        is in the downward path of its arc; this is known as goaltending. It is also illegal under NBA
                        and Men's NCAA basketball to block a shot after it has touched the backboard, or when any part
                        of the ball is directly above the rim. Under international rules it is illegal to block a shot
                        that is in the downward path of its arc or one that has touched the backboard until the ball has
                        hit the rim. After the ball hits the rim, it is again legal to touch it even though it is no
                        longer considered as a block performed.<br/><br/>

                        To block a shot, a player has to be able to reach a point higher than where the shot is
                        released. Thus, height can be an advantage in blocking. Players who are taller and playing the
                        power forward or center positions generally record more blocks than players who are shorter and
                        playing the guard positions. However, with good timing and a sufficiently high vertical leap,
                        even shorter players can be effective shot blockers.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Famous Players:</b></h1>
                    <div
                        className="m-fclt__content text-white grid grid-cols-3 gap-4 p-4 overflow-auto">
                        {bkb.map((fclt) => (
                            <div
                                key={fclt.img}
                                className="m-fclt__item border-2 border-solid border-cyan-400 anmt"
                            >
                                <div className="m-fclt__img h-4/5 flex justify-center items-center overflow-hidden">
                                    <img
                                        src={fclt.img}
                                        alt={fclt.img}
                                        className="min-w-full min-h-full"
                                    />
                                </div>
                                <div
                                    className="m-fclt__desc h-1/5 text-2xl bg-zinc-900 border-t-2 border-solid border-cyan-400 flex justify-center items-center">
                                    {fclt.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}