const Mission = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mission</h2>
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            Vision Bridge の目的は以下の通りです：
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>視覚障がい者の生活の質を向上させ、より自立した生活を支援する。</li>
            <li>最新の AI 技術を活用し、誰もがテクノロジーの恩恵を受けられる環境を創出する。</li>
            <li>テクノロジーの民主化を推進し、持続可能な社会の実現に貢献する。</li>
          </ul>
          <p className="mb-4">
            このプロジェクトは、SDGs（持続可能な開発目標）の達成にも貢献します：
          </p>
          <ul className="list-disc list-inside">
            <li>すべての人に健康と福祉を：視覚障がい者の日常生活における安全性と自立性を向上させます。</li>
            <li>産業と技術革新の基盤をつくろう：最新の AI 技術を活用し、革新的なソリューションを提供します。</li>
            <li>人や国の不平等をなくそう：テクノロジーへのアクセスを平等化し、情報格差の解消に貢献します。</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
