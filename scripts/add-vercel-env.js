#!/usr/bin/env node

/**
 * Script to add Clerk environment variables to Vercel project
 * 
 * Usage:
 * 1. Get your Vercel token from: https://vercel.com/account/tokens
 * 2. Run: VERCEL_TOKEN=your_token PROJECT_ID=your_project_id node scripts/add-vercel-env.js
 */

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = process.env.PROJECT_ID;
const TEAM_ID = process.env.TEAM_ID; // Optional, leave empty if personal account

// Environment variables to add
const ENV_VARS = [
    {
        key: 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
        value: 'pk_test_Y29tbXVuYWwtZ2Vja28tODQuY2xlcmsuYWNjb3VudHMuZGV2JA',
        target: ['production', 'preview', 'development']
    },
    {
        key: 'CLERK_SECRET_KEY',
        value: 'sk_test_A0PgK7kOVjJtLOGrbYAT5R4lIo8UFpNEMgf4HtVw5A',
        target: ['production', 'preview', 'development']
    },
    {
        key: 'NEXT_PUBLIC_CLERK_SIGN_IN_URL',
        value: '/sign-in',
        target: ['production', 'preview', 'development']
    },
    {
        key: 'NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL',
        value: '/',
        target: ['production', 'preview', 'development']
    },
    {
        key: 'NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL',
        value: '/',
        target: ['production', 'preview', 'development']
    }
];

async function addEnvVariable(envVar) {
    const url = TEAM_ID
        ? `https://api.vercel.com/v10/projects/${PROJECT_ID}/env?teamId=${TEAM_ID}`
        : `https://api.vercel.com/v10/projects/${PROJECT_ID}/env`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${VERCEL_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(envVar)
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to add ${envVar.key}: ${error}`);
    }

    return await response.json();
}

async function triggerRedeploy() {
    const deploymentsUrl = TEAM_ID
        ? `https://api.vercel.com/v13/deployments?teamId=${TEAM_ID}`
        : `https://api.vercel.com/v13/deployments`;

    const response = await fetch(deploymentsUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${VERCEL_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'ratrova-website',
            project: PROJECT_ID,
            target: 'production',
            gitSource: {
                type: 'github',
                ref: 'main',
                repoId: 'sagorsk35-bot/ratrova-website'
            }
        })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to trigger deployment: ${error}`);
    }

    return await response.json();
}

async function main() {
    // Validate inputs
    if (!VERCEL_TOKEN) {
        console.error('❌ Error: VERCEL_TOKEN environment variable is required');
        console.log('\nGet your token from: https://vercel.com/account/tokens');
        process.exit(1);
    }

    if (!PROJECT_ID) {
        console.error('❌ Error: PROJECT_ID environment variable is required');
        console.log('\nFind your project ID in Vercel dashboard settings');
        process.exit(1);
    }

    console.log('🚀 Adding environment variables to Vercel...\n');

    // Add each environment variable
    for (const envVar of ENV_VARS) {
        try {
            console.log(`📝 Adding ${envVar.key}...`);
            await addEnvVariable(envVar);
            console.log(`✅ ${envVar.key} added successfully`);
        } catch (error) {
            console.error(`❌ Failed to add ${envVar.key}:`, error.message);
            // Continue with other variables even if one fails
        }
    }

    console.log('\n🔄 Triggering redeployment...');

    try {
        const deployment = await triggerRedeploy();
        console.log('✅ Deployment triggered successfully!');
        console.log(`🔗 Deployment URL: ${deployment.url}`);
    } catch (error) {
        console.error('⚠️  Could not trigger automatic deployment:', error.message);
        console.log('\n💡 Please manually redeploy from Vercel dashboard');
    }

    console.log('\n✨ Done! Your site should be live shortly.');
}

main().catch(error => {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
});
