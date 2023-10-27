import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../common/Helpers";
import NavBar from "../Components/NavBar";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    async function Check() {
      const result = await isLogin();
      if (result === true) {
        console.log("login successfull");
      } else {
        navigate("/login");
      }
    }
    Check();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="px-20 py-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        rerum placeat officiis, laboriosam quos assumenda consequatur culpa
        consequuntur vitae nesciunt aperiam voluptates sint repudiandae quasi,
        error deserunt itaque soluta reiciendis quo nobis ea saepe ab
        perferendis! Magnam vitae et aliquam laudantium non molestias
        perspiciatis deleniti error cumque a amet quasi suscipit fugit dicta
        optio libero alias saepe quia, iusto omnis labore voluptas dolores?
        Voluptatibus corporis sit debitis! Adipisci facere assumenda recusandae
        sapiente debitis vel molestias consectetur labore, impedit eum alias
        neque tempora quod nihil distinctio rerum magnam omnis, provident, fuga
        aperiam placeat. Natus omnis similique praesentium minima repellendus
        distinctio a asperiores maxime recusandae, repellat voluptatum vitae,
        quasi facere repudiandae id, perferendis nesciunt aperiam rerum ad
        expedita. Aspernatur a nostrum aliquid quidem, obcaecati quia itaque
        dolorem. Iste quod veniam iure maxime perferendis distinctio odit, quo
        maiores aliquid at ipsum vitae minima inventore adipisci ipsam et
        suscipit facilis non explicabo quisquam corrupti ab animi possimus.
        Consequuntur, inventore libero. Repellat laboriosam et facilis harum
        reiciendis quidem consequatur quam earum tenetur, optio voluptate odio
        nesciunt dolorum nulla maxime, nam, vel officiis doloribus placeat.
        Delectus eligendi culpa quos facere nemo veritatis cumque libero ducimus
        molestiae, odit eveniet nulla et esse unde architecto placeat? Sed odio
        exercitationem repudiandae nisi quisquam iure, labore inventore
        obcaecati, pariatur placeat ab quidem perspiciatis, unde laborum?
        Recusandae hic reprehenderit id numquam aspernatur labore est fugit
        consectetur iure incidunt fuga sunt alias dolore nemo excepturi sequi
        quasi adipisci aut ex, eveniet, quidem earum consequatur amet in!
        Explicabo totam molestiae laborum voluptatum ea, accusantium sit sequi a
        id soluta recusandae. Corporis quam modi labore officiis? Sapiente,
        laboriosam. Omnis qui alias laboriosam eius nihil itaque maiores, vero
        in molestias ea pariatur nobis ipsum beatae eum cupiditate modi dolorum,
        suscipit molestiae, cumque nulla nesciunt quisquam laborum accusantium
        temporibus. Explicabo, unde. Dolorum mollitia, modi sapiente, a nihil,
        quod quam cumque ea similique suscipit magni nisi optio ipsam. Ducimus
        repudiandae sapiente commodi, ullam explicabo nisi accusamus, mollitia
        quia possimus laudantium odit assumenda velit excepturi id consequuntur
        maxime fuga autem facere consectetur obcaecati repellat ad fugit vel
        distinctio! Reiciendis, doloremque odio nemo sed ex natus suscipit
        itaque voluptates sint fugiat rerum veniam ipsa deleniti veritatis
        perspiciatis illo recusandae? Autem, corporis, non molestiae nam rerum
        suscipit nesciunt id quibusdam accusantium atque est deserunt dolore
        distinctio. Deserunt similique quae debitis sit nam quas commodi quam
        maxime distinctio ipsam maiores laborum odio, impedit, sunt iusto eaque
        minima in velit quaerat fugiat illo odit beatae rem aperiam. Voluptates,
        nostrum est deleniti vel voluptatum dolorum porro, pariatur officiis
        enim sit iste ex labore accusantium totam assumenda rerum beatae
        quibusdam cum nobis. Eligendi expedita doloribus inventore maiores iure,
        officia laborum deserunt eum quo similique, natus voluptatum nostrum
        provident molestiae distinctio, repudiandae nisi sed. Qui voluptate quos
        unde perspiciatis a? Amet atque necessitatibus autem hic quas, qui totam
        vel odit blanditiis omnis quia et, iste magni similique ipsa vitae? Eum
        magni, tenetur voluptate sequi consequuntur non sed. Modi at vel odio
        voluptatem officiis porro ipsum corporis, dolor magni perferendis quod
        excepturi vitae quia voluptate placeat cum voluptatum enim recusandae.
        Nam culpa laborum et voluptates harum ad reiciendis quisquam quo nisi at
        quae ea vitae architecto assumenda perferendis natus repellat
        consectetur officiis quam esse eveniet, facilis eius minima delectus.
        Voluptas, quidem atque esse debitis quis est ad iusto iste adipisci
        voluptates beatae reiciendis. Id autem, maiores quasi in odio sapiente
        non aut, soluta nesciunt quas corrupti error, provident quaerat labore
        iusto? Vero eligendi repellendus ipsum ad quae at atque odit modi
        maiores accusamus, maxime, id, officiis illum similique reprehenderit
        vitae nemo quas harum aperiam? Ex aspernatur, nulla ab fugit cum numquam
        corrupti odit, doloribus temporibus dignissimos accusantium dolorum
        nihil quibusdam at vitae molestiae obcaecati iure quasi. Ut itaque id
        laborum, adipisci consectetur sit et ea optio, sapiente aperiam
        obcaecati veniam veritatis esse ipsa facilis consequatur officia qui
        dicta? Reprehenderit maxime alias laudantium, mollitia, quibusdam
        eligendi adipisci tempora corporis optio, quaerat nostrum quidem tenetur
        enim facere totam et impedit. Blanditiis inventore beatae rem eius
        numquam ipsam ut at rerum quam obcaecati? Et quasi cumque ad, obcaecati
        facilis quibusdam rerum iure quo repellat cupiditate aut nostrum
        dignissimos vero. Deserunt quos fugiat maxime laudantium quasi
        voluptate, velit explicabo at praesentium aspernatur laborum accusamus
        odit vel! Cum deleniti dolores facilis autem labore maxime maiores, quia
        sequi atque iure rerum sapiente quisquam voluptatibus. Error omnis
        possimus atque! Voluptate sint ea, vero pariatur deserunt impedit quis
        nemo laborum animi placeat explicabo minima quisquam laboriosam
        doloremque ipsam numquam qui vel, exercitationem reprehenderit. Officia,
        excepturi repellendus? Quam laboriosam perspiciatis esse fuga! Eos
        aliquam et iure repellendus, tempore quod, natus at, a provident ea
        libero unde repellat commodi omnis quis sunt eius quam? Sit temporibus
        cumque, aliquid cum asperiores repellendus fuga nemo alias! Ad eligendi,
        eos maxime voluptates nisi ipsam ipsa pariatur maiores assumenda. Quas
        quaerat odit sint laboriosam obcaecati asperiores eligendi nesciunt,
        dignissimos explicabo nobis illum deserunt suscipit dolorem harum
        dolorum omnis temporibus praesentium nulla quod, eveniet odio fugit,
        alias eius? Ab maxime fuga magni aspernatur ut dignissimos quisquam
        incidunt, repellat aperiam deserunt at dolorum odio itaque doloremque
        minima enim a cum libero, ipsa asperiores dolore fugit! Illum sapiente
        at sint quia labore doloremque placeat libero quod ab facere dicta
        perspiciatis, unde explicabo ipsam exercitationem nulla? Unde eaque
        voluptates, nisi deleniti velit fugiat ducimus amet odit. Atque nostrum,
        odit cumque voluptas labore corporis ipsam totam ab eos rem vero eaque
        adipisci nisi non temporibus excepturi. Ab rem quis, dolorum quod
        sapiente nulla at molestiae sint unde doloremque harum quaerat tenetur
        ipsam nam vitae commodi sed distinctio quia recusandae ea dignissimos!
        Vero eos libero autem veniam possimus eveniet consequatur vel id
        mollitia odio at magni quis dolor dicta consectetur fugit, ad
        perferendis nam est facilis quasi. Eum nihil ut quis labore magni
        recusandae rerum ab, saepe, incidunt sequi totam. Cupiditate, iusto vel!
        Rerum numquam inventore odit eaque maiores et libero ipsum iure
        similique cum, sunt mollitia quos officiis sed aliquid officia quaerat
        ad quasi recusandae error hic at minus? Quam, rerum. Ducimus asperiores
        eius voluptatem voluptas culpa voluptatibus ex harum sint eveniet,
        laudantium fuga quisquam esse nostrum, eaque repudiandae a iure
        accusamus perspiciatis aperiam excepturi amet modi at hic dolorem. Nihil
        temporibus voluptatibus adipisci accusamus neque consectetur veniam
        dolorum vero quasi. Recusandae placeat quod earum ut impedit, a debitis
        corporis ad necessitatibus quis voluptate quasi laudantium vel
        obcaecati. Accusamus accusantium cupiditate voluptas est odit! Est
        minima aut numquam at non odio velit quisquam quibusdam, voluptatem,
        corporis possimus perferendis aliquid sed fugit dignissimos totam. Eius
        modi impedit necessitatibus nobis porro maiores repellat repellendus aut
        esse iste tenetur, ab libero, ipsum nihil quia, enim beatae. Quasi a ex
        minus necessitatibus odio fuga non dolore, natus quam ab. Illo impedit
        nobis ipsum doloremque quo pariatur non quisquam et. Eligendi,
        repudiandae non? Perferendis quasi nobis quod architecto harum debitis
        ea iusto cumque. Commodi optio molestiae sunt accusamus officia
        voluptate eos. Veritatis magni corporis eveniet autem assumenda dolores,
        odit accusantium alias voluptatibus vel aliquam iste deserunt
        consectetur quibusdam provident deleniti tempore laborum fuga?
        Exercitationem quod veniam inventore doloribus dolore? Ea quod sunt
        molestias, voluptas, optio similique atque aliquam aperiam dolore ut
        maiores autem quisquam eum nesciunt tenetur beatae obcaecati, laborum
        alias necessitatibus unde quaerat? Voluptatibus dolor quae veniam
        aspernatur commodi, numquam quia animi corporis optio at, esse labore
        tempora autem vel ipsam eaque perferendis. Tempora, eos. Ipsam aut,
        eveniet iste accusamus illo distinctio aliquam eaque blanditiis,
        repellendus soluta consequatur? At, unde a, quibusdam dolor perferendis
        doloremque, dolorem error rem maiores laboriosam provident. Voluptatem
        quam ipsa rerum distinctio recusandae? Odio ducimus laudantium pariatur
        beatae ipsa dolorem sit repellendus voluptatibus eos? Quis, nemo
        repudiandae. Consequatur temporibus eius dolorem debitis alias obcaecati
        deleniti aperiam! Libero, vel aperiam ipsam maiores reiciendis alias
        placeat autem necessitatibus explicabo non similique, aliquam qui
        voluptates doloribus aliquid deleniti quam cum, ab nulla voluptatibus
        porro ut. Nihil odit dignissimos nisi quod exercitationem ratione, qui
        error iure nulla tenetur ducimus vel assumenda voluptates obcaecati
        necessitatibus unde laboriosam quas id voluptas eligendi asperiores
        pariatur sint. A numquam aliquam, amet reprehenderit ratione cupiditate!
        Iusto iure distinctio similique deserunt debitis placeat cumque rerum
        soluta voluptates eius. Culpa alias numquam ex commodi sapiente nobis
        illo quia libero aperiam reiciendis, distinctio reprehenderit in
        cupiditate perferendis molestiae neque aliquid. Animi magnam optio
        fugiat dolores repudiandae quas explicabo reiciendis impedit ad nam,
        eveniet officiis, tenetur pariatur dolorum perspiciatis molestias atque
        qui ipsa et. Beatae officiis qui deleniti et ad incidunt! Sit culpa ad a
        reprehenderit, modi ipsa quasi blanditiis facilis, optio laborum
        repellendus cum, aut magnam facere placeat reiciendis nisi iste
        excepturi consectetur eius aliquam porro! Provident veniam vel eius id
        rerum repellendus perspiciatis ex labore eligendi cupiditate amet
        laborum, molestias hic earum minus tempora iure architecto nesciunt
        corrupti atque ipsum. Temporibus deserunt ad exercitationem deleniti
        iusto molestias saepe velit delectus animi nemo tempora asperiores
        laborum inventore autem, unde sint quisquam accusamus mollitia eveniet
        ex. Sit, deserunt nisi atque doloribus deleniti, eveniet alias
        cupiditate ea aperiam exercitationem nesciunt, aut nostrum minima
        facilis ullam! Libero in sunt praesentium alias voluptatum aspernatur
        aliquid ab, nesciunt obcaecati harum eum minima sequi laborum
        recusandae! Pariatur, molestias. Eligendi eaque libero voluptas quasi
        delectus officia pariatur nemo quibusdam. Iusto, eius illo! Amet vel at
        sequi, est, pariatur soluta quod autem illum iste ad vero earum debitis
        corrupti, cumque dolore! Quae explicabo, distinctio esse dolore voluptas
        adipisci placeat quos suscipit omnis ipsa non, quaerat ut harum,
        similique molestiae alias cupiditate? Provident debitis ducimus
        perspiciatis temporibus dolor necessitatibus consectetur fugit! Autem
        soluta velit ipsa possimus consequatur accusantium tenetur? Harum
        laudantium doloremque numquam perferendis ea officiis hic architecto
        placeat voluptates magnam ut ducimus, illo laboriosam veritatis earum
        reprehenderit minus accusamus? Aspernatur natus molestias facilis nam
        expedita at dicta quaerat mollitia illum voluptatum corrupti vitae
        molestiae asperiores rerum nostrum accusamus aperiam earum, ullam animi
        impedit. Fugit cum voluptatibus quibusdam possimus commodi corporis,
        reiciendis aut, doloremque saepe ipsum omnis atque optio incidunt
        laudantium dolor! Consequatur, magnam atque animi, accusantium optio ea
        maxime esse, unde eius odit harum sit doloribus labore. Illo
        exercitationem praesentium perspiciatis ea eaque, maiores sint
        consequatur necessitatibus delectus, ipsum corporis at sapiente
        voluptates. Expedita ducimus id eligendi accusamus nobis nam distinctio
        aliquid corporis magni? Alias dolor vero dicta, laudantium rerum,
        nesciunt quis distinctio modi fugiat beatae, iure maxime ab quia nulla
        excepturi iusto esse a. Sapiente libero pariatur omnis ducimus optio
        officia quo ut, vero facere at voluptate ex voluptatibus nam corrupti
        vitae excepturi quae consequuntur distinctio animi dicta tempora. Earum
        numquam molestiae culpa fuga repellat, accusamus odio, vel et, autem
        facilis id magni sit assumenda minus blanditiis placeat quisquam. Cumque
        numquam quibusdam assumenda ipsum. Culpa voluptatibus obcaecati
        explicabo, quae sit, velit dolorum, quibusdam repellendus hic
        consequuntur architecto rem quaerat rerum mollitia perferendis ipsam
        magnam fugiat nihil doloremque exercitationem aspernatur modi adipisci!
        Ab quod illo reiciendis, sint laborum perferendis cum dolores velit,
        fugiat reprehenderit iusto in ipsum incidunt impedit omnis sed, amet
        molestiae. Beatae dicta quisquam totam iure inventore laborum dolor quo
        molestias porro mollitia, eveniet neque voluptate aspernatur fugiat quam
        excepturi autem quia provident modi magni? Impedit harum eos aspernatur
        suscipit recusandae, quaerat molestias ea! Quam id similique a ut nobis.
        Eligendi, veniam hic. Laudantium sapiente harum ducimus hic magnam
        maxime cum nobis. Facilis, blanditiis obcaecati quam perferendis,
        laborum repellat delectus omnis eligendi quasi in eveniet earum nihil
        dolorum quaerat aliquid, maxime exercitationem sed. Laudantium quis sunt
        sit repellat blanditiis odit earum, aperiam voluptate porro veniam et
        debitis voluptatum dignissimos animi iusto culpa amet excepturi?
        Incidunt minima repellat vitae in at molestiae dolorum expedita
        exercitationem similique quasi libero facere magni, molestias possimus a
        autem est soluta cupiditate praesentium dolorem porro fuga architecto
        nostrum. Porro, non temporibus hic maxime exercitationem adipisci
        eligendi, asperiores laboriosam pariatur eaque distinctio quasi sequi
        molestiae ab minima repellat et? Nihil error optio assumenda minus saepe
        consectetur ea qui cupiditate nulla consequuntur! Quasi iusto minima in
        nobis natus aspernatur repellat, dolor repellendus dignissimos possimus
        porro quisquam officiis! Eveniet cum dolores quod ea? Fugiat quae earum
        a, quidem ab asperiores inventore incidunt, doloribus hic quo natus
        placeat perspiciatis ad, neque quisquam eligendi distinctio in suscipit
        repellendus maxime voluptatibus laboriosam. Error repellat nulla,
        aliquam ratione blanditiis veniam quos. Quasi animi commodi ea dolor.
      </main>
    </div>
  );
}
