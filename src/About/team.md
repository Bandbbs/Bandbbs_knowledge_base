---
layout: page
---


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme-without-fonts';

const members = [
    {
        avatar: "https://www.gravatar.com/avatar/5b2bb9712eb3e22e8afa5734669f485e9a90fc2450d5a3349a06c6b0e94ce8c4?s=460&d=identicon",
        name: "2minRain",
        links: [
            { icon: 'github', link: 'https://github.com/yizigezi'}
        ],
        title: '发起者'
    },
];
const sponsors = [
    {
        avatar: "https://www.gravatar.com/avatar/5b2bb9712eb3e22e8afa5734669f485e9a90fc2450d5a3349a06c6b0e94ce8c4?s=460&d=identicon",
        name: '2secRain'
    },
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            开发/编写团队
        </template>
        <template #lead></template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="members" />
    <VPTeamPageSection>
    <template #title>支持者</template>
    <template #lead>感谢以下用户的支持</template>
    <template #members>
      <VPTeamMembers :members="sponsors" />
    </template>
    </VPTeamPageSection>
</VPTeamPage>